import { createSlice } from "@reduxjs/toolkit";
import { userBookingGetadmin } from "../ExtraRduces/ThankHelpers";

const BookingGetadmin = createSlice({
  name: "BookingGetadmin",
  initialState: {},
  reducers: {},
  extraReducers: {
    [userBookingGetadmin.fulfilled]: (state, action) => {
      state.Booking= action.payload
    },
    [userBookingGetadmin.pending]: (state, action) => {
 
    },
    [userBookingGetadmin.rejected]: (state, action) => {
    
    },
  },
});

export const { } = BookingGetadmin.actions;
export default BookingGetadmin.reducer;
