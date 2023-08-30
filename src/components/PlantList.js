import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, url, onPlantDelete, stockId, addIdToStockArray}) {

  const plantCardList = plants.map(plant => {
    return <PlantCard key={plant.id} addIdToStockArray={addIdToStockArray} stockId={stockId} plant={plant} url={url} onPlantDelete={onPlantDelete} />
  })

  return (
    <ul className="cards">{plantCardList}</ul>
  );
}

export default PlantList;
