import { Box, width } from "@mui/system";
import React from "react";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import { Typography } from "@mui/material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { buildStyles } from "react-circular-progressbar";

const Livestatus = () => {
  return (
    <div>
      <Box sx={{ ml: 2, mt: 1 }}>
        <div style={{ display: "flex" }}>
          <Box
            sx={{
              width: "100%",
              height: 80,
              backgroundColor: "gray",
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
              <div style={{ display: "flex", flexDirection: "column" }}>
                <MarkunreadIcon />
                12,454
                <Typography variant="subtitle2">emails sent</Typography>
              </div>
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
          <Box
            sx={{
              width: "100%",
              height: 80,
              backgroundColor: "gray",
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
              <div style={{ display: "flex", flexDirection: "column" }}>
                <MarkunreadIcon />
                12,454
                <Typography variant="subtitle2">emails sent</Typography>
              </div>
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
          <Box
            sx={{
              width: "100%",
              height: 80,
              backgroundColor: "gray",
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
              <div style={{ display: "flex", flexDirection: "column" }}>
                <MarkunreadIcon />
                12,454
                <Typography variant="subtitle2">emails sent</Typography>
              </div>
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
          <Box
            sx={{
              width: "100%",
              height: 80,
              backgroundColor: "gray",
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
              <div style={{ display: "flex", flexDirection: "column" }}>
                <MarkunreadIcon />
                12,454
                <Typography variant="subtitle2">emails sent</Typography>
              </div>
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
        </div>
      </Box>
    </div>
  );
};

export default Livestatus;
