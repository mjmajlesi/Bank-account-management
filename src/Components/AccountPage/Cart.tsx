import { useState } from "react";
import Modal from "./Modal";
import Close from "../../image/delete.svg";
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
    <div className="border-2 border-white flex items-center p-3 px-7 justify-between rounded-xl relative">
      <div className="transition delay-150 hover:scale-110 flex flex-col items-center gap-1" onClick={ShowToModal}>
        <img width="50px" src={image} alt="Cocacola" />
        <span className="font-semibold">{name}</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm font-medium">{value}</span>
        <span className="text-sm font-medium text-[#970909]">-{spent}</span>
        <span className="text-sm text-Blue">{value != 0 && value - spent}</span>
        <div className="flex flex-col items-center gap-2 w-1/4">
        <img
          width="30px"
          src={Close}
          onClick={handleDelete}
          className=" absolute right-[-8px] top-[-10px] rounded-xl"
        >
        </img>
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
      </div>
      </div>
      
    </div>
  );
}

export default Cart;
