import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

function Chart(props) {

   //getting the maximum expense value for selected month
   const dataPointsValues = props.dataPoints.map(datapoint => datapoint.value) //this returns an array(from the data object) with expense values only
   const totalMaximum = Math.max(...dataPointsValues) //return the maximum value for selected month, use spread operator to get values from array
  return (
     <div className='chart'>
 {
    props.dataPoints.map((datapoint)=>(
        <ChartBar
        // unique id/label ==> key
        key={datapoint.label} 
        value ={datapoint.value}
        maxValue={totalMaximum} 
        label={datapoint.label}>
        </ChartBar>
    ))
 }

    </div>
  )
}

export default Chart