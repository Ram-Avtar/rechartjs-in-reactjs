import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const data01 = [];
const data02 = [];
const data03 = [];
for (let n = 0; n < 10; n++){
  data01.push({
    x: 100 + Math.random(),
    y: 100 + Math.random(),
    z: 100 + Math.random(),
  })
}
for (let n = 0; n < 10; n++){
  data02.push({
    x: 300 + Math.random(),
    y: 300 + Math.random(),
    z: 300 + Math.random(),
  })
}
for (let n = 0; n < 10; n++){
  data03.push({
    x: 500 + Math.random(),
    y: 500 + Math.random(),
    z: 500 + Math.random(),
  })
}


const useStyle = makeStyles({
  paper: {
    backgroundColor: '#1e252b',
    width: '100%',
    height: "500px",
    margin:16
  }
})
function ScatterCharts() {
  const classes = useStyle();
  return (
   
      <ResponsiveContainer className={classes.paper} width="100%" height="400">
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis
            type="number"
            dataKey="x"
            name="stature"
          unit="cm"
          minTickGap={25}
          />
          <YAxis
            // yAxisId="left"
            type="number"
            dataKey="y"
            name="weight"
            unit="kg"
            stroke="red"
          />
          {/* <YAxis
            yAxisId="right"
            type="number"
            dataKey="y"
            name="weight"
            unit="kg"
            stroke="green"
          />
          <YAxis
            yAxisId="right"
            type="number"
            dataKey="y"
            name="weight"
            unit="kg"
            stroke="blue"
          /> */}
          <Tooltip />
          {/* <Scatter yAxisId="left" name="A school" data={data01} fill="red" /> */}
          <Scatter  name="A school" data={data01} fill="red" />
          {/* <Scatter name="A school" data={data02} fill="green" />
          <Scatter  name="A school" data={data03} fill="blue" /> */}
        </ScatterChart>
      </ResponsiveContainer>
  
  )
}

export default ScatterCharts;
