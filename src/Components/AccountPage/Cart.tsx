import { useState } from "react";
import Button from "../Buttun";
import Modal from "./Modal";
import { useAccountContext } from "./AccountContext";

interface Icart {
  id : number;
  name: string;
  image: string;
  value : number;
  spent : number;
}

function Cart({ name, image, id, value , spent }: Icart) {

  const {SetCards} = useAccountContext();
  const [ShowModal, setShowModal] = useState(false);

  const ShowToModal = () => {
    setShowModal(!ShowModal);
  };
  const handleDelete = () => {
    SetCards(prevCards => prevCards.filter(card => card.id !== id));
  };
  

  return (
    <div className="border-2 border-white w-[300px] flex items-center p-3 justify-between rounded-xl">
      <div>
        <img width="50px" src={image} alt="Cocacola" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xl font-semibold">{name}</span>
        <span className="text-sm font-medium">{value}</span>
        <span className="text-sm font-medium text-[#970909]">-{spent}</span>
      </div>
      <div className="flex flex-col items-center gap-2 w-1/4">
        <Button
          variant="normal"
          onClick={ShowToModal}
          className="py-0.5 px-1 w-full  bg-gradient-to-r from-[#FED8BE] to-[#FCFCFC] transition delay-150 hover:scale-110 "
        >
          Edit
        </Button>
        <Button
          variant="normal"
          onClick={handleDelete}
          className="py-0.5 px-1 w-full bg-red-500 hover:bg-red-600 transition delay-150"
        >
          Delete
        </Button>
        {ShowModal && (
          <Modal
            ShowModal={ShowModal}
            SetShowModal={setShowModal}
            name={name}
            value={value}
            Spent={spent}
            id={id}
          />
        )}
        <span className="text-sm text-Blue">{value != 0 && value - spent}</span>
      </div>
    </div>
  );
}

export default Cart;
