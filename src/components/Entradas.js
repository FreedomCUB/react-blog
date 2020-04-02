import React from 'react';

//  Imagenes
import img01 from "../img/01.jpg";
import img02 from "../img/02.jpg";
import img03 from "../img/03.jpg";
import img04 from "../img/04.jpg";
import img05 from "../img/05.jpg";
import img06 from "../img/06.jpg";

const Entradas = () => {
    return ( 
        <div className="contenedor">
      <h2>Últimas Entradas</h2>
      <main className="contenido-principal">
        <article className="entrada">
          <img src={img01} alt="texto entrada" />
          <div className="contenido">
            <h3>Tips para viajar con poco presupuesto</h3>
            <p>Publicado el: <span>19 Julio, 2018</span></p>
            <p>Por: <span>Blog Viajes</span></p>
            <a href="!#" className="boton"> Leer más</a>
          </div>
        </article>
        <article className="entrada">
          <img src={img02} alt="texto entrada" />
          <div className="contenido">
            <h3>Todo lo necesario para tu viaje</h3>
            <p>Publicado el: <span>19 Julio, 2018</span></p>
            <p>Por: <span>Blog Viajes</span></p>
            <a href="!#" className="boton"> Leer más</a>
          </div>
        </article>
        <article className="entrada">
          <img src={img03} alt="texto entrada" />
          <div className="contenido">
            <h3>El equipo necesario para tomar las mejores fotografías</h3>
            <p>Publicado el: <span>19 Julio, 2018</span></p>
            <p>Por: <span>Blog Viajes</span></p>
            <a href="!#" className="boton"> Leer más</a>
          </div>
        </article>
        <article className="entrada">
          <img src={img04} alt="texto entrada" />
          <div className="contenido">
            <h3>Checklist para tu próximo viaje</h3>
            <p>Publicado el: <span>19 Julio, 2018</span></p>
            <p>Por: <span>Blog Viajes</span></p>
            <a href="!#" className="boton"> Leer más</a>
          </div>
        </article>
        <article className="entrada">
          <img src={img05} alt="texto entrada" />
          <div className="contenido">
            <h3>Los mejores lugares para visitar este otoño</h3>
            <p>Publicado el: <span>19 Julio, 2018</span></p>
            <p>Por: <span>Blog Viajes</span></p>
            <a href="!#" className="boton"> Leer más</a>
          </div>
        </article>
        <article className="entrada">
          <img src={img06} alt="texto entrada" />
          <div className="contenido">
            <h3>Los mejores lugares para visitar con montañas</h3>
            <p>Publicado el: <span>19 Julio, 2018</span></p>
            <p>Por: <span>Blog Viajes</span></p>
            <a href="!#" className="boton"> Leer más</a>
          </div>
        </article>
      </main>
    </div>
     );
}
 
export default Entradas;