import React from "react";
import Button from "../Buttun";

interface Imodal {
  ShowModal: boolean;
  SetShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  Spent: number;
  setSpent: React.Dispatch<React.SetStateAction<number>>;
}
const Modal = ({
  ShowModal,
  SetShowModal,
  name,
  value,
  setValue,
  Spent,
  setSpent,
}: Imodal) => {
  const ChangeModal = () => {
    SetShowModal(!ShowModal);
  };

  return (
    <div className="w-[100vw] h-[100vh] top-0 right-0 bottom-0 left-0 fixed">
      <div
        onClick={ChangeModal}
        className="w-[100vw] h-[100vh] top-0 right-0 bottom-0 left-0 fixed bg-[rgba(49,49,49,0.8)]"
      ></div>
      <div className=" absolute top-[40%] left-[35%] bg-main py-4 px-5 rounded-lg max-w-[600px] min-w-[300px] flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-center pb-5">{name}</h2>
        <div className="flex flex-col items-center gap-5">
          <div>
            <label htmlFor="value" className="p-2 text-lg font-medium">
              value :
            </label>
            <input
              id="value"
              className="bg-[rgba(49,49,49,0.8)] p-1 rounded-lg"
              value={value}
              type="number"
              onChange={(e) => setValue(Number(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="spent" className="p-2 text-lg font-medium">
              Spent :
            </label>
            <input
              id="spent"
              className="bg-[rgba(49,49,49,0.8)] p-1 rounded-lg"
              type="number"
              onChange={(e) => setSpent(Number(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="spent" className="p-2 text-lg font-medium">
             Remainder :
            </label>
            <input
              id="Remainder"
              className="bg-[rgba(49,49,49,0.8)] p-1 rounded-lg"
              type="number"
              value={value - Spent}
              disabled
            />
          </div>
        </div>

        <Button
          onClick={ChangeModal}
          className="mt-5 text-center w-full"
          variant="normal"
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default Modal;
