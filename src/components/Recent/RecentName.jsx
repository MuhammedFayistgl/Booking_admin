import { Typography } from "@mui/material";
import React from "react";

const RecentName = ({name}) => {
  return (
    <Typography style={{ fontSize: 10 }} variant="subtitle1">
     {name}
    </Typography>
  );
};

export default RecentName;
