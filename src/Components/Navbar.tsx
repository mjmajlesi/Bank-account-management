import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "./Buttun";
function Navbar() {
  const Navs = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/Login",
      name: "login",
    },
    {
      path: "/account",
      name: "myaccount",
    },
    {
      path: "/DebtsReceivable",
      name: "debts and receivables",
    },
  ];

  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div>
      <div className={`${isNavOpen ? "Navbar" : "mb-24"} mt-4`}>
        <Container>
          <div className="flex justify-between items-center">
            <p className="text-3xl font-medium">MJ</p>
            <div
              onClick={toggleNav}
              className="absolute t0p-[0.75rem] right-[1rem] md:hidden flex flex-col justify-between w-[2.25rem] h-[2rem]"
            >
              <span className="h-[0.4rem] w-full bg-White rounded-md"></span>
              <span className="h-[0.4rem] w-full bg-White rounded-md"></span>
              <span className="h-[0.4rem] w-full bg-White rounded-md"></span>
            </div>
            <ul
              className={` ${
                isNavOpen ? "hidden" : "flex"
              } md:flex flex-col md:flex-row gap-4 md:gap-10 items-center absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-5 md:p-0`}
            >
              {Navs.map((nav, index) => {
                return (
                  <li key={index} className="transition delay-150 hover:scale-110">
                    <Link to={nav.path}>{nav.name}</Link>
                  </li>
                );
              })}
            </ul>
            <div className="Login max-md:hidden">
              <Button
                variant="login"
                className=" bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] transition delay-150 hover:scale-110 "
              >
                <Link className="text-lg p-1" to={"/login"}>Login</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
