import React from "react";
import Button from "../Buttun";

interface Imodal {
  ShowModal: boolean;
  SetShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
const Modal = ({ ShowModal, SetShowModal, name, value, setValue }: Imodal) => {
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
        <div>
          <label htmlFor="value" className="p-2 text-lg font-medium">value : </label>
          <input
            id="value"
            className="bg-[rgba(49,49,49,0.8)] p-1 rounded-lg"
            value={value}
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <Button onClick={ChangeModal} className="mt-5 text-center w-full" variant="normal">
          Close
        </Button>
      </div>
    </div>
  );
};

export default Modal;
