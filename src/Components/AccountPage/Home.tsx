import DoughnutChart from "./DoughnutChart";
import Cart from "./Cart";
import Container from "../Container";
import Button from "../Buttun";
import { useAccountContext } from "./AccountContext";
import { useState } from "react";
import NewModal from "./AddModal";
function Home() {
  const { Totalvalue, Cards, TotalSpent } = useAccountContext();
  const [ShowModal, setShowModal] = useState(false);


  const ShowToModal = () => {
    setShowModal(!ShowModal);
  };
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);


  const handleOpenModal = () => setIsNewModalOpen(true);

  return (
    <div>
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around gap-10 my-20">
          <div className="flex flex-row items-center gap-20">
            <div className="flex flex-col items-center gap-5">
              <span className="text-5xl font-semibold ">{Totalvalue}</span>
              <span className="text-5xl font-semibold ">{TotalSpent}</span>
              <span className="text-5xl font-semibold ">{Totalvalue}</span>
            </div>
            <div className="flex flex-col items-center gap-5">
              <p>For 18 january To 3 February</p>
              <Button
                variant="normal"
                onClick={ShowToModal}
                className=" w-full  bg-gradient-to-r from-[#FED8BE] to-[#FCFCFC] transition delay-150 hover:scale-105 "
              >
                {ShowModal ? "Submit" : "Edit"}
              </Button>
            </div>
          </div>
          <div>
            <DoughnutChart />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {Cards.map((cart, index) => (
            <Cart
              key={index}
              name={cart.name}
              image={cart.image}
              id={cart.id}
              value={cart.value}
              spent={cart.spent}
            />
          ))}
        <Button
          variant="normal"
          onClick={handleOpenModal}
          className="text-3xl font-semibold"
        >
          Add
        </Button>

        <NewModal 
          isOpen={isNewModalOpen} 
          onClose={() => setIsNewModalOpen(false)} 
        />
        </div>
      </Container>
    </div>
  );
}

export default Home;
