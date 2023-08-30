import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, url, onPlantDelete}) {

  const plantCardList = plants.map(plant => {
    return <PlantCard key={plant.id} plant={plant} url={url} onPlantDelete={onPlantDelete} />
  })

  return (
    <ul className="cards">{plantCardList}</ul>
  );
}

export default PlantList;
