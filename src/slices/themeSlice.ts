import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
   // darkMode: typeof window !== "undefined" && window.localStorage.getItem("darkMode") ? JSON.parse(localStorage.getItem("darkMode")!) : false
   darkMode: false
}

if(typeof window !== "undefined"){
   console.log("window")
   console.log(window)
}

export const themeSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      setDarkmode(state, action: PayloadAction<boolean>) {
         state.darkMode = action.payload
         localStorage.setItem("darkMode", JSON.stringify(action.payload))
      },
   },
})

export const { setDarkmode } = themeSlice.actions

export default themeSlice.reducer
