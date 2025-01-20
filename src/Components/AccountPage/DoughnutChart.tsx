import React from "react";
import {Chart as ChartJs , ArcElement , Tooltip , Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2";

ChartJs.register(
    ArcElement,
    Tooltip,
    Legend
)

function DoughnutChart() {
  const data = {
    labels : ["Caffee" , "CocaCola" , "Dinnig Hall"],
    datasets : [{
        label : "Poll",
        data : [3 , 5 , 5],
        backgroundColor : ["red" , "white" , "green"],
        borderColor : ["black"],
        borderWidth: 2,
    }]
  };

  const options = {
    cutout : "60%"
  }
  return (
    <div>
        <Doughnut
        data={data}
        options={options}
        ></Doughnut>
    </div>
  );
}

export default DoughnutChart;
