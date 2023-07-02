import { Box, width } from "@mui/system";
import React from "react";

import { Container, Typography } from "@mui/material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { buildStyles } from "react-circular-progressbar";
import NewBooking from "./NewBooking";
import ScheduleRoom from "./ScheduleRoom";
import Checkin from "./Checkin";
import CheckOut from "./CheckOut";

const LivestatusComponent = () => {
  return (
    <div>
    
        <div style={{ display: "flex", }}>
          <NewBooking />
          <ScheduleRoom />
          <Checkin />
          <CheckOut />
        </div>
    
    </div>
  );
};

export default LivestatusComponent;
