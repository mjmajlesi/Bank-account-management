import React from "react";
import Lottie from "react-lottie";
import animationData from "../../public/Animation.json";
import Container from "./Container";
import Button from "./Buttun";
function Header() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Container>
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="font-semibold text-3xl my-8 ">Better personal discipline for a better life</h1>
          <p className="font-normal text-lg p-2">
            On this site, we have an "advanced to-do list" and an <br />
            "account manager" to calculate your daily income and expenses <br />
            and save you time and money by beautiful UI and Ux.
          </p>
          <div>
            <Button variant=""
          </div>
        </div>
        <div className="w-1/2">
          <Lottie options={defaultOptions} height={350} width={400} />
        </div>
      </div>
    </Container>
  );
}

export default Header;
