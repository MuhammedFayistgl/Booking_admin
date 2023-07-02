import React from "react";
import TransationsComponent from "./TransationsComponent";
import { Grid, List } from "@mui/material";

const RecentTransactionBody = () => {
  return (
    <Grid item md={6} sm={12}>
      <List sx={{maxHeight:600,overflow:'scroll',overflowX:'hidden'}}>
        <TransationsComponent />
      </List>
    </Grid>
  );
};

export default RecentTransactionBody;
