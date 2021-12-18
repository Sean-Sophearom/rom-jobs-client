import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import languageReducer from "./slices/languageSlice";
import jobReducer from "./slices/job";
import snackbarReducer from "./slices/snackbar";

export const store = configureStore({
  reducer: {
    user: userReducer,
    prefLang: languageReducer,
    job: jobReducer,
    snackbar: snackbarReducer,
  },
});
