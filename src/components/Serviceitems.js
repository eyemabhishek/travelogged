import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";
function Serviceitems(props) {
  return (
    <>
      <li className="s_cards__item">
        <Link className="s_cards__item__link" to={props.path}  >  
          <figure className="s_cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="travel logo"
              className="s_cards__item__img"
            ></img>
          </figure>
         
        </Link>
      </li>
    </>
  );
}

export default Serviceitems;
