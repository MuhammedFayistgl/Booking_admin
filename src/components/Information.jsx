import React from "react";
import { Box } from "@mui/system";
import {
  Paper,
  Typography,
} from "@mui/material";
import { Toaster, toast } from "react-hot-toast";
import Allinputs from "./Info.inputs/Allinputs";
import { useDispatch, useSelector } from "react-redux";
import Confom from "./DataTable/Confomation/Confom";
import { getDataHelper, postDataHelper } from "../redux/ExtraRduces/ThankHelpers";
import AccodionTable from "./DataTable/AccodionTable";
import { setReset } from "../redux/Slices/UplodeSlice";



const information = () => {
  const All_Inputs_State = useSelector((s) => s.UplodeData.inputs);

  const Dispatch = useDispatch()

  const HandleSubmit = (e) => {
    const { amount, category, discription, name, place, rating, profilImg } = All_Inputs_State;
    e.preventDefault();
    if (category === undefined) {
      return toast.error("Catagory is required");
    } else if (name === "") {
      return toast.error("Nams is required !!");
    } else if (/[0-9]/.test(name)) {
      return toast.error("number not allowed in name field");
    } else if (/[0-9]/.test(place)) {
      return toast.error("number not allowed in place field");
    } else if (rating === "") {
      return toast.error(`inglude rating your ${name}`);
    } else if (amount === "") {
      return toast.error(`pleas add your Amount  `);
    } else if (discription === "") {
      return toast.error(`pleas add your Discription `);
    }
    //  else if (profilImg === "") {return toast.error(`pleas add your Cover image`);}
    else {
      Dispatch(postDataHelper(All_Inputs_State))
      Dispatch(getDataHelper())
      Dispatch(setReset())
    }
  }


  return (
    <div
      style={{
        marginTop: 15,
        display: "flex",
        justifyContent: "space-between",
        gap: 15,
      }}
    >
      {/* Upload informations for api  */}

      <div>
        {/* {`${inputdata.category ? inputdata.category : `----------`} ${""} INFPRMATION `} */}
        <Toaster />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Paper>
            <form onSubmit={HandleSubmit}>
              {/* inputs */}
              <Allinputs />
            </form>
          </Paper>
        </Box>
      </div>
      {/* Uploded data in table */}
      <div
        style={{
          width: "70%",
          maxHeight: 500,
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <Typography sx={{ mb: 2 }}> {`CATOGORY `}</Typography>
        <AccodionTable />
      </div>
      <Confom />
    </div>
  );
};

export default information;
