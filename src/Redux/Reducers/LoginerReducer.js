import { createSlice } from "@reduxjs/toolkit";

const initialState  =  {
    state : false,
}

const LoginerReducer = createSlice({
    name: "Loginer",
    initialState,
    reducers: {
        Admin: (state) => {
            state.state = "Admin"
        },
        AsaUser: (state) => {
            state.state = true
        },
        Logout: (state) => {
            state.state = false
        }
    }
})

export const { Admin, AsaUser ,Logout } = LoginerReducer.actions

export default LoginerReducer.reducer;