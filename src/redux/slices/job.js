import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  data: [],
  page: 0,
  loading: false,
  bigLoading: false,
  noMore: false,
  justSearched: false,
  searchTerm: {
    level: "",
    industry: "",
    category: "",
    type: "",
    keyword: "",
  },
};

export const fetchJobs = createAsyncThunk("job/getJobs", async (queryParams, thunkApi) => {
  const { page, industry, category, level, type, keyword } = queryParams;
  let apiLink = `/job/get?page=${page}`;
  if (industry && !industry.includes("unlimited")) apiLink += `&industry=${industry}`;
  if (level && !level.includes("unlimited")) apiLink += `&level=${level}`;
  if (category && !category.includes("unlimited")) apiLink += `&category=${category}`;
  if (type && !type.includes("unlimited")) apiLink += `&job_type=${type}`;
  if (keyword) apiLink += `&keyword=${keyword.trim()}`;
  try {
    const response = await axios.get(apiLink);
    return response.data;
  } catch (error) {
    throw thunkApi.rejectWithValue(error.response.data.message);
  }
});

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    chooseParam: (state, { payload }) => {
      const keys = Object.keys(payload);
      for (let i = 0; i < keys.length; i++) {
        state.searchTerm[keys[i]] = payload[keys[i]].trim().split(" ").join("+");
      }
      state.justSearched = true;
    },
    justSearched: (state) => {
      state.bigLoading = true;
      state.page = 0;
      state.data = [];
      state.noMore = false;
    },
    resetJob: (state) => {
      state.page = 0;
      state.searchTerm = initialState.searchTerm;
      state.noMore = false;
    },
  },
  extraReducers: (builder) => {
    //start of getJobs reducers
    builder.addCase(fetchJobs.pending, (state) => {
      state.justSearched = false;
      state.loading = true;
      state.page = state.page + 1;
    });
    builder.addCase(fetchJobs.fulfilled, (state, { payload }) => {
      if (payload.length === 0) {
        state.noMore = true;
      } else if (state.page === 1) {
        state.data = payload;
      } else {
        state.data = [...state.data, ...payload];
      }
      state.loading = false;
      state.bigLoading = false;
    });
    builder.addCase(fetchJobs.rejected, (state) => {
      state.bigLoading = false;
      state.loading = false;
    });
  },
});

export const { chooseParam, resetJob, justSearched } = jobSlice.actions;

export default jobSlice.reducer;
