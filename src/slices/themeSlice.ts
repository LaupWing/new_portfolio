import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
   darkMode: false
}

export const themeSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      setDarkmode(state, action: PayloadAction<boolean>) {
         state.darkMode = action.payload
      },
   },
})

export const { setDarkmode } = themeSlice.actions

export default themeSlice.reducer
