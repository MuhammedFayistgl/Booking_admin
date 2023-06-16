import { TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDiscription } from "../../redux/Slices/UplodeSlice";

const DiscriptionInput = () => {
  const Dispatch = useDispatch()
  const State = useSelector((s)=> s.UplodeData.inputs  )
  // console.log(State,"State");
  return (
    <>
      <TextField
        required={true}
        id="filled-multiline-static"
        label="Discription"
        multiline
        rows={4}
        placeholder="Discription"
        variant="filled"
        name="discription"
        onChange={e => Dispatch(setDiscription(e.target.value))}
        value={State?.discription}
      />
    </>
  );
};

export default DiscriptionInput;
