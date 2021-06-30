import React from 'react';
import { Typography} from '@material-ui/core';
// import LineCharts from './Charts/LineCharts';
import ScatterCharts from './Charts/ScatterCharts';


function MianGraph() {
  return (
    <div>
      <Typography variant='h2' color='primary'>
         Main
      </Typography>
      <ScatterCharts />
      {/* <LineCharts />   */}
    </div>
  )
}

export default MianGraph;
