import React from "react";
import Navigationbar from "../components/Navigationbar";
import Navigationmenu from "../components/Navigationmenu";
import Linechart from "../components/LinCart/Linechart";

const LinechartComponent = () => {
  return (
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
      <div style={{width:700}}>
          <Linechart />
      </div>
        
       
      </div>
    </div>
  );
};

export default LinechartComponent;
