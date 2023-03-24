import React from "react";

import { Line } from "react-chartjs-2";

import { data, options } from "../Data/LinechsrtData";

const Linechart = () => {
  return (
    <>
     
    
                <Line data={data} options={options}  />
    

     
    </>
  );
};

export default Linechart;
