import React, { useState } from "react";

function NewPlantForm({url, onNewPlantAdd}) {
  const initialValue = {
    name: "",
    image: "",
    price: ""
  }

  const [ newPlantData, setNewPlantData ] = useState(initialValue)

  function handleChange(e){
    const { name, value } = e.target

    setNewPlantData({
      ...newPlantData,
      [name]: value
    })
  }

  function handleNewPlantSubmit(e){
    e.preventDefault()

    fetch(url, {
      method: "POST",
      headers: {
        "content-type" : "application/json",
        "accept" : "application/json"
      },
      body: JSON.stringify(newPlantData)
    })
    .then(res => res.json())
    .then(data => {
      onNewPlantAdd(data)
      setNewPlantData(initialValue)
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleNewPlantSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={newPlantData.name}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={newPlantData.image}
          onChange={handleChange}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={newPlantData.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
