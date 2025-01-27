import DoughnutChart from "./DoughnutChart";
import Cart from "./Cart";
import Container from "../Container";
import Button from "../Buttun";
import { useAccountContext } from "./AccountContext";
import { useState } from "react";
import NewModal from "./AddModal";
function Home() {
  const { Totalvalue, Cards, TotalSpent , totalMoney , settotalMoney } = useAccountContext();
  const [ShowModal, setShowModal] = useState(false);


  const ShowToModal = () => {
    setShowModal(!ShowModal);
  };
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);


  const handleOpenModal = () => setIsNewModalOpen(true);

  return (
    <div>
      <Container>
        <div className="flex flex-col items-center justify-center gap-20 ">
          <div className="flex flex-col md:flex-row md:items-center items-start justify-center gap-10">
            <div className="flex flex-col items-start  gap-5 w-[500px]">
              {ShowModal ? <input className="text-xl md:text-3xl font-semibold bg-main " onChange={(e) => settotalMoney(Number(e.target.value))} /> : <input className="text-xl md:text-3xl font-semibold bg-main  " value={`Total Money : ${totalMoney} T`} disabled />}
              <span className="text-xl md:text-3xl font-semibold ">Total ValueGoal : {Totalvalue} T</span>
              <span className="text-xl md:text-3xl font-semibold ">Total Spent : {TotalSpent} T</span>
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
          <div className="mb-10">
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
