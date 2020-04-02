import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faYoutube, faInstagram, faPinterestP } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const year = new Date();

    return (
        <footer>
            <div className="contenedor footer">
                <div className="nosotros">
                    <h2>Sobre Nosotros</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque molestiae doloribus ipsum impedit ducimus! Officiis recusandae
                    eaque itaque sunt est odio dicta distinctio quas. Earum illum nemo magni
                    architecto temporibus voluptatum. Praesentium temporibus quasi quaerat at.
                    </p>
                    <p>Dolorum, esse vitae quo aut itaque fugiat
                    odit magni? Nobis nulla illo unde magni, autem facere, corporis
                    sunt qui cum impedit, voluptate quasi quas perferendis quae natus
                    possimus earum!
                    </p>

                </div>
                <div className="ultimas-entradas">
                    <h2>últimas entradas</h2>
                    <ul>
                        <li> <a href="/">Lorem ipsum dolor sit.</a></li>
                        <li><a href="/">Lorem ipsum dolor sit amet.</a></li>
                        <li><a href="/">Lorem, ipsum dolor.</a></li>
                        <li><a href="/">Lorem ipsum dolor sit amet consectetur. </a></li>
                    </ul>
                </div>
                <div className="redes">
                    <h2>Siguenos</h2>
                    <ul className="iconos-redes">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} />
                            <span>Facebook</span>
                        </a>
                        </li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                            <span>Twitter</span>
                        </a>
                        </li>
                        <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} />
                            <span>Youtube</span>
                        </a>
                        </li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                            <span>Instagram</span>
                        </a>
                        </li>
                        <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faPinterestP} />
                            <span>Pinterest</span>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="copyright">Blog De Viajes {year.getFullYear()}. &copy;</p>
        </footer>
    );
}

export default Footer;