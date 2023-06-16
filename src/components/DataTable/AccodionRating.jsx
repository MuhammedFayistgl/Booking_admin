import { Rating, Typography } from "@mui/material";
import React from "react";

const AccodionRating = ({rating}) => {
  return (
    <>
      <Typography sx={{ width: "21%", fontSize: 15, flexShrink: 0 }}>
        <Rating size="small" readOnly value={rating} />
      </Typography>
    </>
  );
};

export default AccodionRating;
