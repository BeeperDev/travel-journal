import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import places from "./places";

function App() {
  console.log(places);
  const cards = places.map((place) => {
    return <Card key={place.id} {...place} />;
  });

  return (
    <div>
      <Navbar />
      <section>{cards}</section>
    </div>
  );
}

export default App;
