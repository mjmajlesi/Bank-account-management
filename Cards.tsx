import React from "react";
import Card from "./src/Components/Card";

function Cards() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mt-32">
      <Card name="Account" path="/account" />
      <Card name="Money" path="/DebtsReceivable" />
    </div>
  );
}

export default Cards;
