import { Typography } from "@mui/material";
import React from "react";

const AcodionCategory = ({ category }) => {
  return (
    <>
      <Typography sx={{ width: "20%", fontSize: 15, flexShrink: 0 }}>{category}</Typography>
    </>
  );
};

export default AcodionCategory;
