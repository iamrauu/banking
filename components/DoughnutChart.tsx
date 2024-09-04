'use client'

import React from 'react'
import {Chart, Tooltip, ArcElement} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const accountNames = accounts.map(a => a.name);
  const balances = accounts.map(a => a.currentBalance);
  
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: balances,
        backgroundColor: ['#AF975A', '#D7CBAC', '#CBBB92']
      }
    ],
    labels: accountNames
  }

  return <Doughnut 
    data={data}
    options={{
      cutout: '65%',
    }}
  />  
}

export default DoughnutChart