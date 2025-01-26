import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    state : []
}

const Department = createSlice({
    name: "department",
    initialState,
    reducers: {
        fetchDepartments: (state, action) => {
            state.state = action.payload
        },
        deleteDepartment: (state, action) =>{
            state.state = state.state.filter((department) => department._id!== action.payload)
        }
    }
})

export const { fetchDepartments, deleteDepartment } = Department.actions;

export default Department.reducer;