import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    State: [],
};

const benificiary = createSlice({
    name: "benificiary",
    initialState,
    reducers: {
        fetchBenificiaries: (state, action) => {
            state.Benificiary = action.payload;
        },
        deleteBenificiary: (state, action) => {
            state.Benificiary = state.Benificiary.filter(
                (benificiary) => benificiary._id!== action.payload
            );
        },
    },
 });

export const { fetchBenificiaries, deleteBenificiary } = benificiary.actions;

export default benificiary.reducer;