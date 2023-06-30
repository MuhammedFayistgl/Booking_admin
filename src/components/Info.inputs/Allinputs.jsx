import React from "react";
import CatagoryInput from "./CatagoryInput";
import NameInput from "./NameInput";
import PlaceInput from "./PlaceInput";
import RatingInput from "./RatingInput";
import AmountInput from "./AmountInput";
import DiscriptionInput from "./DiscriptionInput";
import ImgUplodeInput from "./ImgUplodeInput";
import UplodeInputsBTN from "./UplodeInputsBTN";
import { FormControl } from "@mui/material";
import Profileimagebutton from "../Proimgbutton";

const Allinputs = () => {
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120, gap: 2 }} size="small">
        <CatagoryInput />
        <NameInput />
        <PlaceInput />
        <RatingInput />
        <AmountInput />
        <DiscriptionInput />
        {/* <ImgUplodeInput /> */}
        {/* <Profileimagebutton/> */}
        <UplodeInputsBTN />
      </FormControl>
    </>
  );
};

export default Allinputs;
