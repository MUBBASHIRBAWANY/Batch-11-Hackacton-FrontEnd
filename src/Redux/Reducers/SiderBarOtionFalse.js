import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    transtionOpen : false,
    Setup : false,
    Reports : false
};


const sidebarOptions = createSlice({
    name: "sidebarOptions",
    initialState,
    reducers: {
        toggleTranstion : (state) => {
            state.transtionOpen = false
        },
        Transtionopen: (state) => {
            state.transtionOpen = true
        },
        toggleSetup : (state) => {
            state.Setup = false
        },
        SetupOpen: (state) => {
            state.Setup = true
        },
        toggleReports : (state) => {
            state.Reports = false
        },
        ReportsOpen: (state) => {
            state.Reports = true
        }
    }
 });


 export const { toggleTranstion, Transtionopen, toggleSetup, SetupOpen, toggleReports, ReportsOpen } = sidebarOptions.actions;
 export default sidebarOptions.reducer;