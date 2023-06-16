import { InputLabel, Select,MenuItem } from "@mui/material";
import React from "react";
// import { MenuItem } from "react-pro-sidebar";
import { setCatagory } from "../../redux/Slices/UplodeSlice";
import { useDispatch, useSelector } from "react-redux";

const CatagoryInput = () => {
  const Dispatch = useDispatch()
  const State = useSelector((s)=> s.UplodeData.inputs  )
  // console.log(State,"State");
  return (
    <>
     <InputLabel id="demo-select-small">Category</InputLabel>
      <Select key={"1"} required={true} id="demo-select-small" label="Category" name="category" value={State?.category} onChange={e=> Dispatch(setCatagory(e.target.value))}>
        <MenuItem value={"Hotels"}>Hotels</MenuItem>
        <MenuItem value={"Appartments"}>Appartments</MenuItem>
        <MenuItem value={"Resorts"}>Resorts</MenuItem>
      </Select>
    </>
  );
};

export default CatagoryInput;
