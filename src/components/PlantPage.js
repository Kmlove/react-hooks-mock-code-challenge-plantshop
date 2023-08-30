import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const url = "http://localhost:6001/plants"
  const [ plants, setPlants ] = useState([])
  const [ searchPlant, setSearchPlant ] = useState("")

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])

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

  const plantsToDisplay = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchPlant.toLowerCase())
  })


  return (
    <main>
      <NewPlantForm url={url} onNewPlantAdd={onNewPlantAdd} />
      <Search searchPlant={searchPlant} updateSearchPlant={updateSearchPlant} />
      <PlantList url={url} plants={plantsToDisplay} onPlantDelete={onPlantDelete} />
    </main>
  );
}

export default PlantPage;
