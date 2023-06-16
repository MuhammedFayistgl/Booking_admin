import { Typography } from "@mui/material";
import React from "react";

const AccodionName = ({name}) => {
  return (
    <>
      <Typography sx={{ width: "16%", fontSize: 15, flexShrink: 0 }}>{name}</Typography>
    </>
  );
};

export default AccodionName;
