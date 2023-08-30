import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const url = "http://localhost:6001/plants"
  const [ plants, setPlants ] = useState([])
  const [ searchPlant, setSearchPlant ] = useState("")
  const [ stockId, setStockId ] = useState([])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])

  function addIdToStockArray(id){
    setStockId([...stockId, id])
  }

  function onNewPlantAdd(newPlant){
    setPlants([...plants, newPlant])
  }

  function updateSearchPlant(value){
    setSearchPlant(value)
  }

  function onPlantDelete(deletedPlant){
    const updatedPlants = plants.filter(plant => {
      return plant.id !== deletedPlant.id
    })
    setPlants(updatedPlants)
  }

  function onPlantPriceUpdate(updatedPlant){
    const updatedPlants = plants.map(plant => {
      if(plant.id === updatedPlant.id){
        return updatedPlant
      } else {
        return plant
      }
    })
    setPlants(updatedPlants)
  }

  const plantsToDisplay = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchPlant.toLowerCase())
  })


  return (
    <main>
      <NewPlantForm url={url} onPlantPriceUpdate={onPlantPriceUpdate} onNewPlantAdd={onNewPlantAdd} plants={plantsToDisplay}/>
      <Search searchPlant={searchPlant} updateSearchPlant={updateSearchPlant} />
      <PlantList onPlantPriceUpdate={onPlantPriceUpdate} stockId={stockId} addIdToStockArray={addIdToStockArray} url={url} plants={plantsToDisplay} onPlantDelete={onPlantDelete} />
    </main>
  );
}

export default PlantPage;
