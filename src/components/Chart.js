import React from 'react'

import styles from "./Chart.module.css"

import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid,
  ReferenceLine,
  Legend, 
  Tooltip
 } from 'recharts';

const Chart = ({data, chartLine, intialPpm}) => {

  // Change the gradient values dynamically
  const gradientValues = () => {
    const gradientData = data
    let check = false
    let cutoff = 0
    let upper = 0
    let lower = 0
    let percent = 0

    for (let i=0; i < gradientData.length; i++) {
      // use right value here !!! 0.2....
      if (gradientData[i].value <= 0.02 && check===false) {
        check = true
        cutoff = i
      }
      
      percent = (cutoff / gradientData.length) * 100
      console.log("cut", cutoff, percent)
    }
    
    if ((percent - 15) < 0) {
      lower = "0%"
    } else {
      lower = (percent - 15).toString() + "%"
    }

    if ((percent + 15) > 100) {
      upper = "100%"
    } else {
      upper = (percent + 15).toString() + "%"
    }
    
    return [lower, upper]
  } 

  let gradientVals = gradientValues()

  console.log("data", data, chartLine, intialPpm)
  
  return (
    <>
      <ResponsiveContainer className={styles.graph} width="100%" height={300} >
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: "rgb(255,0,0)", stopOpacity: 1}}/>
            <stop offset={gradientVals[0]} style={{stopColor: "rgb(255,160,0)", stopOpacity: 1}}/>
            <stop offset={gradientVals[0]} style={{stopColor: "rgb(255,160,0)", stopOpacity: 1}}/>
            <stop offset={gradientVals[1]} style={{stopColor: "rgb(0,255,0)", stopOpacity: 1}} />
            <stop offset={gradientVals[1]} style={{stopColor: "rgb(0,255,0)", stopOpacity: 1}}/>
            <stop offset="100%" style={{stopColor: "rgb(0,255,220)", stopOpacity: 1}}/>
          </linearGradient>
          </defs>

          <Area dataKey="value" stroke="#000" fill="url(#color)" name="PPM" baseLine={"12"} />

          <XAxis dataKey="date" label=".." tickSize={4} interval="preserveStartEnd" />

          <YAxis dataKey="value" width={50}  domain={[0, intialPpm]} />

          <CartesianGrid opacity={0.4} vertical={false} />

          <ReferenceLine x={chartLine} stroke="red" label={{ position: 'left',  value: '0.02ppm', fill: 'black', fontSize: 20 }} ifOverflow="extendDomain"  />

          <Legend />
          
          <Tooltip />
          
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}

export default Chart

