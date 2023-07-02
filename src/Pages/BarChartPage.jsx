import React from 'react'
import Navigationbar from '../components/Navigationbar'
import Navigationmenu from '../components/Navigationmenu'
import BarChart from '../components/BarChart/BarChart'

const BarChartPage = () => {
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
      <div style={{width:700}}>
       <BarChart/>
      </div>
        
       
      </div>
    </div> 
    </>
  )
}

export default BarChartPage
