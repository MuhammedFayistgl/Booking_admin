import React from 'react'
import { Bar } from 'react-chartjs-2';
import {data ,options} from '../Data/BarchartData'

const Barchart = () => {
  return (
    <div>
      <Bar   data={data} options={options} />
    </div>
  )
}

export default Barchart
