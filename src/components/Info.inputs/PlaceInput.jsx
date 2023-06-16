import { TextField } from "@mui/material";
import React from "react";
import { setPlace } from "../../redux/Slices/UplodeSlice";
import { useDispatch, useSelector } from "react-redux";

const PlaceInput = () => {
  const Dispatch = useDispatch()
  const State = useSelector((s)=> s.UplodeData.inputs  )
  // console.log(State,"State");
  return (
    <>
      <TextField
        label={"Place"}
        id="outlined-size-small"
        size="small"
        name="place"
        value={State?.place}
        required={true}
        onChange={ e => Dispatch (setPlace(e.target.value)) }
      />
    </>
  );
};

export default PlaceInput;
