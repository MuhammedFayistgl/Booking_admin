import React from "react";
import Navigationbar from "../components/Navigationbar";
import Navigationmenu from "../components/Navigationmenu";
import Piechart from "../components/PieChart/Piechart";

const Piepage = () => {
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
          <div style={{ width: 700 }}>
            <Piechart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Piepage;
