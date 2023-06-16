import { LoadingButton } from "@mui/lab";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postDataHelper } from "../../redux/ExtraRduces/ThankHelpers";

const UplodeInputsBTN = () => {
  const Btn_State = useSelector((s) => s.UplodeData.UplodButton);
 
  // console.log(State,"State");
  const Dispatch = useDispatch();
  return (
    <>
      <LoadingButton
      
        type="submit"
        size="small"
        disabled={Btn_State.disabled}
        loading={Btn_State.loading}
        loadingIndicator="Loading…"
        variant="outlined"
        endIcon={<CloudUploadIcon />}
      >
        <span>UPLODE</span>
      </LoadingButton>
    </>
  );
};

export default UplodeInputsBTN;
