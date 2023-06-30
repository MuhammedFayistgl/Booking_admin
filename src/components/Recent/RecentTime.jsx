import { Typography } from "@mui/material";
import React from "react";
import { Tooltip, Whisper } from "rsuite";

const RecentTime = ({ time,name }) => {
  const tooltip = (
    <Tooltip>
    { `${name} Orderd Time : ${time}` }
    </Tooltip>
  );
  return (
    <Whisper placement="top" controlId="control-id-hover" trigger="hover" speaker={tooltip}>
      <Typography style={{ fontSize: 12 }}>{time}</Typography>
    </Whisper>
  );
};

export default RecentTime;
