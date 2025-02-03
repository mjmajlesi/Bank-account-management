import DoughnutChart from "./DoughnutChart";
import Cart from "./Cart";
import Container from "../Container";
import Button from "../Buttun";
import { useAccountContext } from "./AccountContext";
import { useState } from "react";
import NewModal from "./AddModal";
function Home() {
  const { Totalvalue, Cards, TotalSpent } = useAccountContext();

  const [isNewModalOpen, setIsNewModalOpen] = useState(false);


  const handleOpenModal = () => setIsNewModalOpen(true);
  // ShowModal ? <input className="text-xl md:text-2xl font-semibold bg-main outline-none border-2 p-3 rounded-lg " onChange={(e) => settotalMoney(Number(e.target.value))} /> : <input className="text-xl md:text-3xl font-semibold bg-main   " onChange={()=> ShowToModal} value={`Total Money : ${totalMoney} T`} disabled />}
  return (
    <div>
      <Container>
        <div className="flex flex-col items-center justify-center gap-20 mb-36 ">
          <div className="grid grid-cols-2 gap-5 w-1/2">
            <div className="border-2 rounded-lg p-3 flex items-center justify-between ">
              <span className="text-xl md:text-2xl font-semibold ">Total ValueGoal :</span>
              <span className="text-md font-medium">{Totalvalue} T</span>
            </div>
            <div className="border-2 rounded-lg p-3 flex items-center justify-between ">
              <span className="text-xl md:text-2xl font-semibold ">Total Spent :</span>
              <span className="text-md font-medium">{TotalSpent} T</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-20">
          <div className="mb-10 w-1/3">
            <DoughnutChart />
          </div>
          <div className="grid grid-cols-3 gap-10 w-2/3">
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
          </div>
        </div>

        <NewModal
          isOpen={isNewModalOpen}
          onClose={() => setIsNewModalOpen(false)}
        />
      </Container >
    </div>

  );
}

export default Home;
