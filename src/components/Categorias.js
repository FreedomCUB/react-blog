import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMusic,
  faUtensils,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

const Categorias = () => {
  return (
    <div className="contenedor">
      <div className="categorias">
        <ul>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              Actividades
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faMusic} className="icon" />
              Festivales
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faUtensils} className="icon" />
              Restaurants
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faCheck} className="icon" />
              Actividades
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categorias;
