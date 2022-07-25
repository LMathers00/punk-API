import "./BeerCard.scss";
import React from "react";


const BeerCard =({name, key, description, image}) => {
//Some descriptions can be too long so iffel capping that at 50 characters feels like a good step 
//BUT we don't wanna end mid-sentence
  const lastSentenceIndex = description.indexOf(".", 50) + 1;
  const shortenedText = description.substring(0, lastSentenceIndex);

  
  return ( 
    <section className="beer">
      <h1>{name}</h1>
      <img className="beer__image" src={image} alt="beer pic" />
      <h2>{key}</h2>
      <p>{shortenedText}</p>
    </section>
  )
}

export default BeerCard
