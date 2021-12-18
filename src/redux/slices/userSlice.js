import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  data: {},
  loading: false,
  error: { name: null, password: null },
};

export const login = createAsyncThunk("user/login", async (data, thunkApi) => {
  try {
    const response = await axios.post("/auth/login", data.userInfo);
    return { user: response.data, rmbMe: data.rmbMe };
  } catch (error) {
    throw thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const signup = createAsyncThunk("user/signup", async (data, thunkApi) => {
  try {
    const response = await axios.post("/auth/register", data.userInfo);
    return { user: response.data };
  } catch (error) {
    throw thunkApi.rejectWithValue(error.response.data.message);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserFromStorage: (state) => {
      if (localStorage.getItem("user")) {
        state.data = JSON.parse(localStorage.getItem("user"));
      } else if (sessionStorage.getItem("user")) {
        state.data = JSON.parse(sessionStorage.getItem("user"));
      }
    },
    clearAllError: (state) => {
      state.error = initialState.error;
    },
    clearError: (state, { payload }) => {
      state.error[payload] = null;
    },
    setError: (state, { payload }) => {
      state.error[payload.errorType] = payload.data;
    },
    clearUser: (state) => {
      state.loading = false;
      state.error = initialState.error;
      state.data = initialState.data;
    },
  },
  extraReducers: (builder) => {
    //start of login reducers
    builder.addCase(login.pending, (state) => {
      state.data = initialState.data;
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      if (payload.rmbMe) {
        localStorage.setItem("user", JSON.stringify(payload.user));
      } else {
        sessionStorage.setItem("user", JSON.stringify(payload.user));
      }
      state.data = payload.user;
      state.loading = false;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.loading = false;
      if (payload.includes("password")) {
        state.error.password = payload;
      } else {
        state.error.name = payload;
      }
    });
    //end of login reducers

    //start of signup reducers
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      sessionStorage.setItem("user", JSON.stringify(payload.user));
      state.data = payload.user;
      state.loading = false;
    });
    builder.addCase(signup.rejected, (state, { payload }) => {
      state.loading = false;
      state.error.name = payload;
    });
  },
});

export const selectUser = createSelector(
  (state) => ({ user: state.user.data, loading: state.user.loading, error: state.user.error }),
  (state) => state
);

export const { getUserFromStorage, clearAllError, clearError, setError, clearUser } = userSlice.actions;

export default userSlice.reducer;
