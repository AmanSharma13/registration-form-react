import React from "react";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import Destination from "./Destination";
faker.seed(100);

const Destinations = () => {
  const destinationsArray = [...Array(9)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.nature(),
  }));

  const [destinations] = useState(destinationsArray);

  return (
    <>
      <h1
        className="text-center m-3"
        style={{ borderBottom: "4px green dotted" }}
      >
        Destinations
      </h1>
      <div className="dest-container">
        {destinations.map((dest) => (
          <Destination dest={dest} key={dest.id} />
        ))}
      </div>
    </>
  );
};

export default Destinations;
