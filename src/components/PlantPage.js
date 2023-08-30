import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const url = "http://localhost:6001/plants"
  const [ plants, setPlants ] = useState([])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])

  function onNewPlantAdd(newPlant){
    setPlants([...plants, newPlant])
  }


  return (
    <main>
      <NewPlantForm url={url} onNewPlantAdd={onNewPlantAdd} />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
