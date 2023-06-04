import React from 'react'
import ChartBar from 'ChartBar'
import './Chart.css'

function Chart(props) {
   //getting the maximum expense value for selected month
   const dataPointsValues = props.dataPoints.map(datapoint => datapoint.value) //this returns an array(from the data object) with expense values only
  return (
     <div className='chart'>
 {
    props.dataPoints.map((datapoint)=>(
        <ChartBar
        // unique id/label ==> key
        key={datapoint.key} 
        value ={datapoint.value}
        maxValue={null} 
        label={datapoint.label}/>
    ))
 }

    </div>
  )
}

export default Chart