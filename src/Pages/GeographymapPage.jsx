import React from 'react'
import Geographymap from '../components/Geographymap'
import Navigationbar from '../components/Navigationbar'
import Navigationmenu from '../components/Navigationmenu'

const GeographymapPage = () => {
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
       <Geographymap/>
      </div>
        
       
      </div>
    </div>
  )
}

export default GeographymapPage
