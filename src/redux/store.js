import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import languageReducer from "./slices/languageSlice";

export const store = configureStore({ reducer: { user: userReducer, prefLang: languageReducer } });
