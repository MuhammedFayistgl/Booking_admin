import { Typography } from "@mui/material";
import React from "react";

const AccodionPlace = ({place}) => {
  return (
    <>
      <Typography sx={{ width: "16%", fontSize: 15, flexShrink: 0 }}>{place}</Typography>
    </>
  );
};

export default AccodionPlace;
