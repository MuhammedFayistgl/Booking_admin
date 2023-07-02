import { Paper, Typography } from "@mui/material";
import React from "react";

const RecentTitle = () => {
  return (
    <>
  
      <Paper square sx={{  backgroundColor:'lightblue' }}>
        <Typography sx={{p:1}}>Recent Transations</Typography>
      </Paper>
    </>
  );
};

export default RecentTitle;
