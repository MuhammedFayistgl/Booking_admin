import React from 'react'
import { Pie } from 'react-chartjs-2';
import {data} from '../Data/piechaerData'



const Piechart = () => {
  return (
    <div>
      <Pie data={data}/>
    </div>
  )
}

export default Piechart
