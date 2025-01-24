import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-24">
      <Card name="Account" path="/account" />
      <Card name="Money" path="/DebtsReceivable" />
    </div>
  );
}

export default Cards;
