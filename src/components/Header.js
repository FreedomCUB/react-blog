import React from 'react';
import Nav from "../components/Nav";

import logo from "../img/logo.png";

const Header = () => {
    return (
        <header className=" header hero">
            <div className="header-nav">
                <div className="contenedor">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <Nav />

                </div>
            </div>
            <div className="header-contenido">
                <div className="contenedor">
                    <h1>Bienvenido a Blog de Viajes</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;