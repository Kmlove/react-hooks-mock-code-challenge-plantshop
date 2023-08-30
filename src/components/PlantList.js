import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, url, onPlantDelete, stockId, addIdToStockArray, onPlantPriceUpdate}) {

  const plantCardList = plants.map(plant => {
    return (
      <PlantCard 
        key={plant.id} 
        url={url} 
        plant={plant} 
        onPlantDelete={onPlantDelete} 
        addIdToStockArray={addIdToStockArray} 
        stockId={stockId} 
        onPlantPriceUpdate={onPlantPriceUpdate}
      />
    )
  })

  return (
    <ul className="cards">{plantCardList}</ul>
  );
}

export default PlantList;
