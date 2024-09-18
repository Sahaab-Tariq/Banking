"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  // Log the extracted data
  console.log(accounts)
  const accountNames = accounts.map((a) => a.name);
  const balances = accounts.map((a) => a.currentBalance);

  // console.log('Account Names:', accountNames);
  // console.log('Balances:', balances);

  const data = {
    datasets: [
      {
        label: 'Banks',
        data: balances,
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'] 
      }
    ],
    labels: accountNames
  };

  return accounts.length ? (
    <Doughnut 
      data={data} 
      options={{
        cutout: '60%',
        plugins: {
          legend: { display: false }
        }
      }}
    />
  ) : <p>No data available</p>;
}


export default DoughnutChart