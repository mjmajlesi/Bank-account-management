import { useState } from "react";
import Button from "../Buttun";
import Modal from "./Modal";

interface Icart {
  name: string;
  image: string;
}

function Cart({ name, image }: Icart) {
  const [ShowModal, setShowModal] = useState(false);
  const [value, setValue] = useState(0);
  const [Spent, setSpent] = useState(0);

  const ShowToModal = () => {
    setShowModal(!ShowModal);
  };
  return (
    <div className="border-2 border-white w-[300px] flex items-center p-3 justify-between rounded-xl">
      <div>
        <img width="50px" src={image} alt="Cocacola" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xl font-semibold">{name}</span>
        <span className="text-sm font-medium">{value}</span>
      </div>
      <div className="flex flex-col items-center gap-2 w-1/4">
        <Button
          variant="normal"
          onClick={ShowToModal}
          className="py-0.5 px-1 w-full  bg-gradient-to-r from-[#FED8BE] to-[#FCFCFC] transition delay-150 hover:scale-110 "
        >
          Edit
        </Button>
        {ShowModal && (
          <Modal
            name={name}
            ShowModal={ShowModal}
            SetShowModal={setShowModal}
            value={value}
            setValue={setValue}
            Spent={Spent}
            setSpent={setSpent}
          />
        )}
        <span className="text-sm text-Blue">{value != 0 && value - Spent}</span>
      </div>
    </div>
  );
}

export default Cart;
