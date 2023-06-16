import { FormControl, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import React from "react";
import { setAmount } from "../../redux/Slices/UplodeSlice";
import { useDispatch, useSelector } from "react-redux";

const AmountInput = () => {
  const Dispatch = useDispatch()
  const State = useSelector((s)=> s.UplodeData.inputs  )
  // console.log(State,"State");
  return (
    <>
      <FormControl fullWidth sx={{ mt: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Amount"
          size="small"
          type="number"
          name="amount"
          required={true}
          onChange={e => Dispatch(setAmount(e.target.value)) }
          value={State?.amount}
        />
      </FormControl>
    </>
  );
};

export default AmountInput;
