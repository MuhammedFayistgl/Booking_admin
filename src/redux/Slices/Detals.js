import { createSlice } from "@reduxjs/toolkit";
import { DeleteState } from "../State/STATE_Details";
import { getDataHelper } from "../ExtraRduces/ThankHelpers";
const DeatelsSlice = createSlice({
  name: "deatels",
  initialState: DeleteState,
  reducers: {},
  extraReducers: {
    [getDataHelper.fulfilled]: (state, action) => {
      state.data = action.payload
      state.refechData = false
      console.log("getDataHelper", action.payload);
    },
    [getDataHelper.pending]: (state, action) => {
      state.refechData = false
      console.log("getDataHelperpending");
    },
    [getDataHelper.rejected]: (state, action) => {
      console.log("getDataHelperrejected");
      state.refechData = false
    },
  },
});

export const { } = DeatelsSlice.actions;
export default DeatelsSlice.reducer;
