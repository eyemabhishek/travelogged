import React from "react";

import Serviceitems from "./Serviceitems";
import Footer from "./Footer";
function Servicecard() {
  return (
    <>
      <div className="s_cards">
        <h1>Explore new activity</h1>
        <div className="s_cards__container">
          <div className="s_cards__wrapper">
            <ul className="s_cards__items">
              <Serviceitems
                src="images/s5.jpg"
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                path="#"
                label="Camping"
              />
              <Serviceitems
                src="images/s1.jpg"
                text="Travel through the island of BALI in a private cruise"
                path="#"
                label="Trekking"
              />
              <Serviceitems
                src="images/s8.jpg"
                text="Travel through the island of BALI in a private cruise"
                path="#"
                label="Paragliding"
              />
            </ul>
            <ul className="s_cards__items">
              <Serviceitems
                src="images/s7.jpg"
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                path="#"
                label="Sightseeinng"
              />
              <Serviceitems
                src="images/s2.jpg"
                text="Travel through the island of BALI in a private cruise"
                path="#"
                label="Hill station"
              />
              <Serviceitems
                src="images/s4.jpg"
                text="Travel through the island of BALI in a private cruise"
                path="#"
                label="Beach side"
              />
            </ul>
            <ul className="s_cards__items">
              <Serviceitems
                src="images/s11.jpg"
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                path="#"
                label="Bunjee jumping"
              />
              <Serviceitems
                src="images/s3.jpg"
                text="Travel through the island of BALI in a private cruise"
                path="#"
                label="Waterfalls"
              />
              <Serviceitems
                src="images/s9.jpg"
                text="Travel through the island of BALI in a private cruise"
                path="#"
                label="Desert safari"
              />
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Servicecard;
