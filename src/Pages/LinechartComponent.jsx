import React from "react";
import Linechart from "../components/Linechart";
import Navigationbar from "../components/Navigationbar";
import Navigationmenu from "../components/Navigationmenu";

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
      <div style={{width:1060,height:500}}>
          <Linechart />
      </div>
        
       
      </div>
    </div>
  );
};

export default LinechartComponent;
