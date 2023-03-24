import React from 'react'
import Barchart from '../components/Barchart'
import Navigationbar from '../components/Navigationbar'
import Navigationmenu from '../components/Navigationmenu'

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
      <div style={{width:1060,height:500}}>
       <Barchart/>
      </div>
        
       
      </div>
    </div> 
    </>
  )
}

export default BarChartPage
