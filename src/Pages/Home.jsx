import React from "react";
import Linechart from "../components/Linechart";
import Livestatus from "../components/Livestatus";
import Navigationbar from "../components/Navigationbar";
import Navigationmenu from "../components/Navigationmenu";
import { Box } from "@mui/material";
import Piechart from "../components/Piechart";
import Barchart from "../components/Barchart";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Button from "@mui/material/Button";
import Geographymap from "../components/Geographymap";

const Home = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Navigationbar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: " -webkit-fill-available",
          }}
        >
          <Navigationmenu />
          <Livestatus />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Paper elevation="4">
                <Box>
                  <div style={{ width: 690, height: 345, padding: 5 }}>
                    <Barchart />
                  </div>
                </Box>
              </Paper>

              <Box>
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    width: "100%",
                    maxWidth: 360,
                    minWidth: 350,
                    bgcolor: "background.paper",
                    position: "relative",
                    overflow: "auto",
                    maxHeight: 340,
                    "& ul": { padding: 0 },
                  }}
                >
                  <Paper square sx={{ p: 1 }}>
                    <Typography>Recent Transations</Typography>
                  </Paper>
                  <Paper>
                    <ListItem
                      sx={{ display: "flex", flexDirection: "row", gap: 2 }}
                    >
                      <ListItemText sx={{ display: "flex" }}>
                        <Typography  style={{fontSize:12}}  variant="subtitle2">id.. </Typography>
                        <Typography  style={{fontSize:10}} variant="subtitle1"> Name</Typography>
                      </ListItemText>
                      <Typography  style={{fontSize:12}}>20-5-2023</Typography>
                      <Button size="small" variant="contained" color="success">
                        $5235
                      </Button>
                    </ListItem>
                  </Paper>
                  <Paper>
                    <ListItem
                      sx={{ display: "flex", flexDirection: "row", gap: 2 }}
                    >
                      <ListItemText sx={{ display: "flex" }}>
                        <Typography  style={{fontSize:12}} variant="subtitle2">id.. </Typography>
                        <Typography  style={{fontSize:10}} variant="subtitle1"> Name</Typography>
                      </ListItemText>
                      <Typography  style={{fontSize:12}}>20-5-2023</Typography>
                      <Button size="small" variant="contained" color="success">
                        $5235
                      </Button>
                    </ListItem>
                  </Paper>
                  <Paper>
                    <ListItem
                      sx={{ display: "flex", flexDirection: "row", gap: 2 }}
                    >
                      <ListItemText sx={{ display: "flex" }}>
                        <Typography  style={{fontSize:12}} variant="subtitle2">id.. </Typography>
                        <Typography   style={{fontSize:10}}variant="subtitle1"> Name</Typography>
                      </ListItemText>
                      <Typography  style={{fontSize:12}}>20-5-2023</Typography>
                      <Button size="small" variant="contained" color="success">
                        $5235
                      </Button>
                    </ListItem>
                  </Paper>
                  <Paper>
                    <ListItem
                      sx={{ display: "flex", flexDirection: "row", gap: 2 }}
                    >
                      <ListItemText sx={{ display: "flex" }}>
                        <Typography  style={{fontSize:12}} variant="subtitle2">id.. </Typography>
                        <Typography  style={{fontSize:10}} variant="subtitle1"> Name</Typography>
                      </ListItemText>
                      <Typography  style={{fontSize:12}} >20-5-2023</Typography>
                      <Button size="small" variant="contained" color="success">
                        $5235
                      </Button>
                    </ListItem>
                  </Paper>
                </List>
              </Box>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',gap:3,marginTop:10}}>
            <Paper elevation="4">
              <div style={{ width: 200, height: 200 }}>
                <Piechart />
              </div>
            </Paper>

            <Paper elevation="4">
              <div style={{ width: 500 }}>
                <Linechart />
              </div>
            </Paper>
            <Paper>
              <div style={{ width: 350, height: 300 }}>
                <Geographymap />
              </div>
            </Paper>
          </div>
          </div>
    
        </div>
      </div>
    </>
  );
};

export default Home;
