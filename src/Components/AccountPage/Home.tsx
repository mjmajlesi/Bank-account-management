import DoughnutChart from "./DoughnutChart";
import Cart from "./Cart";
import Container from "../Container";
import Button from "../Buttun";
import { useAccountContext } from "./AccountContext";
import { useState } from "react";
function Home() {

  const {Totalvalue ,setTotalvalue , Carts} = useAccountContext();
  const [ShowModal, setShowModal] = useState(false);

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
          {Carts.map((cart, index) => (
            <Cart key={index} name={cart.name} image={cart.image} id={cart.id} value={cart.value} spent={cart.spent} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
