import {createSlice} from "@reduxjs/toolkit";

interface UIState {
  menuOpen: boolean,
  dropdownActive: boolean
}

const initialState: UIState = {
  menuOpen: false,
  dropdownActive: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    menuToggle(state) {
      state.menuOpen = !state.menuOpen
    },
    menuClose(state) {
      state.menuOpen = false
    },
    dropdownOpen(state) {
      state.dropdownActive = true
    },
    dropdownClose(state) {
      state.dropdownActive = false
    }
  }
})

export default uiSlice.reducer
