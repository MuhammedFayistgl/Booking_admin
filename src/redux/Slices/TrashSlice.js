import { createSlice } from "@reduxjs/toolkit";
import { DeleteState } from "../State/STATE_Details";
import { OneitemTrash } from "../ExtraRduces/TrashItemeThunk";

const TrashSlice = createSlice({
  name: "TrashItems",
  initialState: DeleteState,
  reducers: {
    setDeletedata: (state, action) => { state.trashID = action.payload },
    setOpen: (state, action) => { state.open = action.payload },


  },
  extraReducers: {
    [OneitemTrash.fulfilled]: (state, action) => {

      state.trashre = action.payload
      state.refechData = true
      console.log("OneitemTrash fulfilled ", action);
    },
    [OneitemTrash.pending]: (state, action) => {

      console.log("OneitemTrash pending", action);
    },
    [OneitemTrash.rejected]: (state, action) => {
      console.log("OneitemTrash rejected", action);
    },
  },
});

export const { setDeletedata, setOpen } = TrashSlice.actions;
export default TrashSlice.reducer;
