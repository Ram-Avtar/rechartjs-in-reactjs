import React from 'react';
import {
  makeStyles,

} from '@material-ui/core';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { subDays } from "date-fns"

const data = [];

for (let n = 40; n >= 0; n--){
  data.push({
    date: subDays(new Date(), n).toISOString().substr(0, 10),
    value:((5+ Math.random())*10)
  })
}
const useStyle = makeStyles({
  paper: {
    backgroundColor: '#1e252b',
    borderRadius: 10,
    marginTop: '16px',
    marginBottom: '16px',
    marginLeft: '16px',
    marginRight: '16px',
    
   
    
  },
  line: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

function LineCharts() {
  const classes = useStyle();

  const CustomizedXAxisLable = (props) => {
    const { x, y, payload } = props
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={20} y={15} dy={19} fontSize="20"  fontWeight="bold" textAnchor="end"  fill="white" transform="rotate(-35)">
        {payload.value}
      </text>
      </g>
    )
  }

  return (
   
      <ResponsiveContainer className={classes.paper} width="90%"
      height={500}>
      <LineChart
        className={classes.line}
      layout="horizontal"
      data={data}
      margin={{
        top: 35,
        right: 35,
        left: 35,
        bottom: 35
      }}
        
    >
        <CartesianGrid
          x={100}
          opacity='0.1'
          strokeDashArray="1" />
      <XAxis dataKey="date"
        tickLine={false}
        height={60}
        // width={1400}
        stroke="white"
          strokeWidth={3}
        interval={1}
        tick={<CustomizedXAxisLable />}
        />
        <YAxis dataKey="value"
          tickLine={false}
          stroke="white"
          strokeWidth={3}
          tickCount={5}
          tick={{fill:'white', fontWeight:'bold', fontSize:'20'} }/>
      <Tooltip />
          <Legend align='right'
            verticalAlign="top"
            iconSize={50}
            iconType="plainline"
            chartHeight={20}
            chartWidth={20}
          />
          <Line dataKey="value" type='linear'
            dot={false}
          strokeWidth={5}
          color="#61d5fa"
            stroke="#61d5fa" />
    </LineChart>
    </ResponsiveContainer>
      
  )
}

export default LineCharts;
