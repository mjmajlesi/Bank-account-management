import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/Animation.json";
import Container from "../Container";
import Button from "../Buttun";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const goLinks = (path: string) => {
    navigate(path);
  };
  return (
    <Container>
      <div className="flex items-center justify-around my-20">
        <div className="w-2/3">
          <h1 className="font-semibold text-4xl my-8 ">
            Better personal discipline for a better life
          </h1>
          <p className="font-normal text-lg p-2">
            On this site, we have an "advanced to-do list" and an <br />
            "account manager" to calculate your daily income and expenses <br />
            and save you time and money by beautiful UI and Ux.
          </p>
          <div className="my-5 p-5 flex gap-10">
            <Button
              onClick={() => goLinks("/account")}
              variant="normal"
              className="p-3"
            >
              My Accuont
            </Button>
            <Button
              onClick={() => goLinks("/DebtsReceivable")}
              variant="normal"
              className="p-3"
            >
              Debts & Receivable
            </Button>
          </div>
        </div>
        <div className="w-1/3">
          <Lottie options={defaultOptions} height={350} width={400} />
        </div>
      </div>
    </Container>
  );
}

export default Header;
