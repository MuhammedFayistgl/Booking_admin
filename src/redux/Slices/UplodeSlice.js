import { createSlice } from "@reduxjs/toolkit";
import { Redux_Update_State } from "../State/STATE_Details";
import {
  AmountHelper,
  CatagoryHelper,
  DiscriptionHelper,
  NameHelper,
  PlaceHelper,
  ProfilimageURLHelper,
  RateHelper,
  RestHelper,
} from "../Actions/DatatSeterHelper";
import { postDataHelper } from "../ExtraRduces/ThankHelpers";
import { toast } from "react-hot-toast";


const UplodeSlice = createSlice({
  name: "UplodeSlice",
  initialState: Redux_Update_State,
  reducers: {
    setCatagory: (state, action) => CatagoryHelper(state, action),
    setName: (state, action) => NameHelper(state, action),
    setPlace: (state, action) => PlaceHelper(state, action),
    setRate: (state, action) => RateHelper(state, action),
    setAmount: (state, action) => AmountHelper(state, action),
    setDiscription: (state, action) => DiscriptionHelper(state, action),
    setProfilimageURL: (state, action) => ProfilimageURLHelper(state, action),
    setReset: (state, action) => RestHelper(state, action)
  },
  extraReducers: {
    [postDataHelper.pending]: (state, action) => {
      state.UplodButton.loading = true;
      console.log("pending Paylod", action);
      // toast.loading('please wait...');
    },
    [postDataHelper.rejected]: (state, action) => {
      state.UplodButton.loading = false;
      toast.error(action.payload.massage)
      console.log("rejected Paylod", action);
    },
    [postDataHelper.fulfilled]: (state, action) => {
      state.UplodButton.loading = false;
      console.log("fulfilled Paylod............", action);
      toast.success(action.payload.massage)
      
    },
  },
});
export const { setCatagory, setName, setPlace, setRate, setAmount, setDiscription, setProfilimageURL, setReset } = UplodeSlice.actions;
export default UplodeSlice.reducer;
