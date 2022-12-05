import {createSlice} from "@reduxjs/toolkit";

interface UIState {
    menuOpen: boolean
}

const initialState: UIState = {
    menuOpen: false
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
        }
    }
})

export default uiSlice.reducer
