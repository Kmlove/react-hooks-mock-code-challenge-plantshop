import React, { useState } from "react";

function PlantCard({plant, url, onPlantDelete, stockId, addIdToStockArray, onPlantPriceUpdate}) {
  const {image, name, price, id} = plant
  // const [ inStock, setInStock ] = useState(true)
  const [ newPrice, setNewPrice ] = useState(price)
  const [ showPrice, setShowPrice ] = useState(false)

  function handleClick(){
    addIdToStockArray(id)
  }

  const hasId = stockId.includes(id)

  function handleDeleteClick(){
    fetch(`${url}/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(onPlantDelete(plant))
  }

  function handlePriceChange(e){
    setNewPrice(e.target.value)
  }

  function handlePriceChanceSubmit(e){
    e.preventDefault()

    fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "content-type" : "application/json",
        "accept" : "application/json"
      },
      body: JSON.stringify({price: newPrice})
    })
    .then(res => res.json())
    .then(data => onPlantPriceUpdate(data))
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {!hasId ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button 
        style={{marginLeft: "15px", background: "red", color: "white"}}
        onClick={handleDeleteClick}
      >
        Delete Plant
      </button>

      {!showPrice? 
        <button onClick={()=> {setShowPrice(!showPrice)}}>Update Plant Price</button>
        :
        <button onClick={()=> {setShowPrice(!showPrice)}}>Hide Price form</button>
      }
      
      
      {showPrice? 
      (
        <form onSubmit={handlePriceChanceSubmit} >
          <input 
            type="number" 
            name="price" 
            step="0.01" 
            placeholder="Price" 
            value={newPrice}
            onChange={handlePriceChange}
          />
          <button type="submit">Update Price</button>
        </form>
      ) : null}

    </li>
  );
}

export default PlantCard;
