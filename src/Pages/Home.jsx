import React from "react";
import Navigationbar from "../components/Navigationbar";
import Navigationmenu from "../components/Navigationmenu";
import {  Container, Grid } from "@mui/material";
import LivestatusComponent from "../components/LiveStatus/Frame/LivestatusComponent";
import BarChart from "../components/BarChart/BarChart";
import Piechart from "../components/PieChart/Piechart";
import Linechart from "../components/LinCart/Linechart";
import RecentTransactionBody from "../components/Recent/RecentTransactionBody";



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
            overflow: "auto",
          }}
        >
          <Container>
            <Navigationmenu />
            <LivestatusComponent />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <BarChart />
              <Piechart />
              <Linechart />
               <RecentTransactionBody />
            </Grid>

          </Container>
        </div>
      </div>
    </>
  );
};

export default Home;
