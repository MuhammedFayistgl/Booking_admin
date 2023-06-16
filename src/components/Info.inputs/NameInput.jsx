import { TextField } from "@mui/material";
import React from "react";
import { setName } from "../../redux/Slices/UplodeSlice";
import { useDispatch, useSelector } from "react-redux";

const NameInput = () => {
  const Dispatch = useDispatch()
  const State = useSelector((state)=> state.UplodeData.inputs  )
  //  console.log(State,"State");
  return (
    <>
      <TextField
        value={State?.name}
        required={true}
        type={"text"}
        label={` Name `}
        id="outlined-required"
        size="small"
        name="name"
        onChange={ (e)=> Dispatch(setName(e.target.value))}
      />
    </>
  );
};

export default NameInput;
