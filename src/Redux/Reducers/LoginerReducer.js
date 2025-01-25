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
            state.state = "Rec"
        },
        Hod: (state) => {
            state.state = "Hod"
        },
        Logout: (state) => {
            state.state = false
        }
    }
})

export const { Admin, AsaUser ,Logout , Hod } = LoginerReducer.actions

export default LoginerReducer.reducer;