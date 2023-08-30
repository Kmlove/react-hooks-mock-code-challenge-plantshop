import React, { useState } from "react";

//Comented out code was intial attempt at updating price but found a more
//efficient way to do so. Check out PlantCard for new form + PATCH request

function NewPlantForm({url, onNewPlantAdd, plants, onPlantPriceUpdate}) {
  const initialValue = {
    name: "",
    image: "",
    price: ""
  }
  // const initialUpdateValue = {
  //   name: "",
  //   price: ""
  // }

  const [ newPlantData, setNewPlantData ] = useState(initialValue)
  // const [ updatePlantData, setUpdatePlantData ] = useState(initialUpdateValue)

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

  // function handleUpdateChange(e){
  //   const {name, value} = e.target

  //   setUpdatePlantData({
  //     ...updatePlantData,
  //     [name]: value
  //   })
  // }

  // function handlePlantUpdateSubmit(e){
  //   e.preventDefault()

  //   const updatedPlant = plants.filter(plant => {
  //     return plant.name.toLowerCase() === updatePlantData.name.toLowerCase()
  //   })

  //   if(updatedPlant.length !== 1){
  //     alert("We cannot find the plant you want to update. Please check the spelling on the plant name and try again.")
  //   } else {
  //     const updatedPlantId = updatedPlant[0].id
  //     const newPrice = parseInt(updatePlantData.price)
      
  //     fetch(`${url}/${updatedPlantId}`, {
  //       method: "PATCH",
  //       headers: {
  //         "content-type" : "application/json",
  //         "accept" : "application/json"
  //       },
  //       body: JSON.stringify({price: newPrice})
  //     })
  //     .then(res => res.json())
  //     .then(data => onPlantPriceUpdate(data))
  //   }
  // }

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

      {/* <h2 style={{marginTop: "20px"}}>Update Plant Price</h2>
      <form onSubmit={handlePlantUpdateSubmit} >
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={updatePlantData.name}
          onChange={handleUpdateChange}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={updatePlantData.price}
          onChange={handleUpdateChange}
        />
        <button type="submit">Update Plant</button>
      </form> */}
    </div>
  );
}

export default NewPlantForm;
