import DoughnutChart from "./DoughnutChart";
import Cart from "./Cart";
import Container from "../Container";
import CocaCola from "../../image/coca-cola-logo-svgrepo-com.svg";
import Bus from "../../image/bus-svgrepo-com.svg";
import Coffee from "../../image/coffee-svgrepo-com.svg";
import dinnigHall from "../../image/food-svgrepo-com.svg";
import taxi from "../../image/taxi-svgrepo-com.svg";
import Tea from "../../image/tea-svgrepo-com.svg";
import Button from "../Buttun";
import { useState } from "react";
import Modal from "./Modal";

function Home() {
  const Category = [
    {
      name: "CocaCola",
      image: CocaCola,
    },
    {
      name: "Coffee",
      image: Coffee,
    },
    {
      name: "Bus",
      image: Bus,
    },
    {
      name: "Dinnig Hall",
      image: dinnigHall,
    },
    {
      name: "Taxi",
      image: taxi,
    },
    {
      name: "Tea",
      image: Tea,
    },
  ];

  const [ShowModal, setShowModal] = useState(false);
  const [Totalvalue, setTotalvalue] = useState(0);

  const ShowToModal = () => {
    setShowModal(!ShowModal);
  };

  return (
    <div>
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around gap-10 my-20">
          <div className="flex flex-col items-center gap-5">
            {ShowModal ? (
              <input
                className="text-center text-5xl font-bold border-2 rounded-xl  w-[400px] border-white outline-none bg-main"
                type="text"
                onChange={(e) => setTotalvalue(Number(e.target.value))}
              />
            ) : (
              <input
                className="text-center text-5xl font-bold  w-[400px] bg-main"
                type="text"
                value={Totalvalue}
                disabled
              />
            )}
            <p>For 18 january To 3 February</p>
            <Button
              variant="normal"
              onClick={ShowToModal}
              className=" w-full  bg-gradient-to-r from-[#FED8BE] to-[#FCFCFC] transition delay-150 hover:scale-105 "
            >
              {ShowModal ? "Submit" : "Edit"}
            </Button>
          </div>
          <div>
            <DoughnutChart />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {Category.map((cart, index) => (
            <Cart key={index} name={cart.name} image={cart.image} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
