import { Typography } from "@mui/material";
import React from "react";
import moment from "moment";
import { Tooltip, Whisper } from "rsuite";

const RecentDate = ({ date, name }) => {
  const conv_date = moment(date).utc().format("YYYY-MM-DD"); 
  //to convert this 2021-07-14T00:00:00.000Z date string value into the YYYY-MM-DD format

  const tooltip = <Tooltip>{`${name} Orderd Date : ${conv_date}`}</Tooltip>;
  return (
    <Whisper placement="top" controlId="control-id-hover" trigger="hover" speaker={tooltip}>
      <Typography style={{ fontSize: 12 }}>{conv_date}</Typography>
    </Whisper>
  );
};

export default RecentDate;
