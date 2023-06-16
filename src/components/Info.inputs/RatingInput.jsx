import { Rating } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRate } from "../../redux/Slices/UplodeSlice";

const RatingInput = () => {
  const Dispatch = useDispatch()
  const State = useSelector((s)=> s.UplodeData.inputs  )
  // console.log(State,"State");
  return (
    <>
      <Rating key={1} size="small" onChange={e => Dispatch(setRate(e.target.value)) } value={State?.rating} name="rating" required={true} />
    </>
  );
};

export default RatingInput;
