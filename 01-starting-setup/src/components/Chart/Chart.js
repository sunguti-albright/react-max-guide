import React from 'react'
import ChartBar from 'ChartBar'
import './Chart.css'

function Chart(props) {
  return (
     <div className='chart'>
 {
    props.dataPoints.map((datapoint)=>(
        <ChartBar
        // unique id/label
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