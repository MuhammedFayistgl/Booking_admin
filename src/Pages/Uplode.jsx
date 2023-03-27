import React from "react";
import Navigationbar from "../components/Navigationbar";
import Navigationmenu from "../components/Navigationmenu";
import Uplodecomponent from "../components/Uplodecomponent";
import Container from "@mui/material/Container";
const Uplode = () => {
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
          <div style={{ width: 1060, height: 500 }}>
            <Container maxWidth="lg">
              <Uplodecomponent />
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Uplode;
