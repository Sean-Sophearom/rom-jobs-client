import { createSlice } from "@reduxjs/toolkit";

const languageSlize = createSlice({
  name: "prefLang",
  initialState: "eng",
  reducers: {
    getLangFromLocal: (state) => {
      const prefLang = localStorage.getItem("prefLang");
      if (prefLang) return JSON.parse(localStorage.getItem("prefLang"));
      return state;
    },
    toggleLang: (state) => {
      if (state === "kh") {
        localStorage.setItem("prefLang", JSON.stringify("eng"));
        return "eng";
      } else {
        localStorage.setItem("prefLang", JSON.stringify("kh"));
        return "kh";
      }
    },
  },
});

export const { getLangFromLocal, toggleLang } = languageSlize.actions;

export default languageSlize.reducer;
