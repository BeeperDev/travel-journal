import React from "react";
import Card from "./Card";
import places from "../places";

const CardSection = () => {
  const cards = places.map((place) => {
    return <Card key={place.id} {...place} />;
  });

  return (
    <div>
      <section className="max-w-[767px] mx-auto py-6">{cards}</section>
    </div>
  );
};

export default CardSection;
