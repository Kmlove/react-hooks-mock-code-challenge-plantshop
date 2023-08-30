import React, { useState } from "react";

function PlantCard({plant, url, onPlantDelete, stockId, addIdToStockArray}) {
  const {image, name, price, id} = plant
  // const [ inStock, setInStock ] = useState(true)

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
    </li>
  );
}

export default PlantCard;
