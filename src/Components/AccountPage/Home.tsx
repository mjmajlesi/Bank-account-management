import DoughnutChart from "./DoughnutChart";
import Cart from "./Cart";
import Container from "../Container";
import CocaCola from "../../image/coca-cola-logo-svgrepo-com.svg";
import Bus from "../../image/bus-svgrepo-com.svg";
import Coffee from "../../image/coffee-svgrepo-com.svg";
import dinnigHall from "../../image/food-svgrepo-com.svg";
import taxi from "../../image/taxi-svgrepo-com.svg";
import Tea from "../../image/tea-svgrepo-com.svg";


function Home() {
  return (
    <div>
        <Container>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-around gap-10 my-20">
        <div className="flex flex-col items-center gap-5">
          <p className="text-center text-5xl font-bold">1500000 T</p>
          <p>For 18 january To 3 February</p>
        </div>
        <div>
          <DoughnutChart />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        <Cart name="CocaCola" image={CocaCola}   />
        <Cart name="Coffee" image={Coffee} />
        <Cart name="Bus" image={Bus}  />
        <Cart name="Dinnig Hall" image={dinnigHall}  />
        <Cart name="Taxi" image={taxi} />
        <Cart name="Tea" image={Tea}  />
      </div>
      </Container>
    </div>
  );
}

export default Home;
