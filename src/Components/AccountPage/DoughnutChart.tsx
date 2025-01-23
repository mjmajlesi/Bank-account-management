import {Chart as ChartJs , ArcElement , Tooltip , Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2";
import { Category } from "../../data";
import { useAccountContext } from "./AccountContext";

ChartJs.register(
    ArcElement,
    Tooltip,
    Legend
)

function DoughnutChart() {

  const {Cards} = useAccountContext()

  const data = {
    labels : Category.map(cart => cart.name),
    datasets : [{
      data : Cards.map(cart => (cart.spent)),
      backgroundColor : Category.map(cart => cart.color),
      borderColor : ["black"],
      borderWidth: 2,
  }]
  }

  const options = {
    cutout : "60%"
  }
  console.log(data)
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
