import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const plantCardList = plants.map(plant => {
    return <PlantCard key={plant.id} plant={plant} />
  })

  return (
    <ul className="cards">{plantCardList}</ul>
  );
}

export default PlantList;
