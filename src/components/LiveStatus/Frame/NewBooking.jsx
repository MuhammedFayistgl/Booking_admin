import { Box, Typography } from "@mui/material";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import NewBookInfo from "../Infoall/NewBookInfo";
import { BiBookAdd } from "react-icons/bi";

const NewBooking = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 80,
          backgroundColor: "#5299e0",
          margin: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 10,
          }}
        >
          <BiBookAdd fontSize={30} style={{ color: "white" }} />
          <NewBookInfo />
          <span style={{ width: 35, height: 35 }}>
            <CircularProgressbar
              value={66}
              styles={buildStyles({
                textColor: "red",
                pathColor: "turquoise",
                trailColor: "gold",
              })}
            />
          </span>
        </div>
      </Box>
    </>
  );
};

export default NewBooking;
