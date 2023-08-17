import { createSlice } from '@reduxjs/toolkit';

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialState: boolean = prefersDarkMode;

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleThemePreference: (state) => !state,
  },
});

export const { toggleThemePreference } = themeSlice.actions;

export default themeSlice.reducer;
