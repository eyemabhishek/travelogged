import React from "react";
import Carditem from "./Carditem";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <h1>Check out these epic destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Carditem
              src="images/s12.jpg"
              text="Watch the sky and get the experience of livng in jungle with your loved ones"
              label="Adventure"
              path="/services"
            />
            <Carditem
              src="images/s13.jpg"
              text="Relax your body and mind between the city enjoying your drink"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <Carditem
              src="images/s15.jpg"
              text="Explore the ruins of north-america"
              label="Sightseeing"
              path="/services"
            />
            <Carditem
              src="images/s16.jpg"
              text="Walk through the bitches and play some water sports"
              label="Beach"
              path="/services"
            />
            <Carditem
              src="images/s17.jpg"
              text="Explore the wonder's of the world"
              label="7 Wonders"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
