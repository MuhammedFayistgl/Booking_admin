import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";

const Piechart = () => {
  const data = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    options: {
      chart: {
        type: "polarArea",
      },
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.8,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <Grid item md={6} sm={12}>
      {/* <Container>
        <Paper sx={{ padding: 2, paddingTop: 4, width: 400 }}> */}
          <Chart options={data.options} series={data.series} type="polarArea" />
        {/* </Paper>
      </Container> */}
    </Grid>
  );
};

export default Piechart;
