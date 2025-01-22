import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../styles/Body/Carrusel.css';
import pizzaImage from '../images/pizzaPeper.jpeg'; // Importa la imagen
import pizzaImagejam from '../images/pizzajam.jpeg'; // Importa la imagen
import pizzaImageques from '../images/pizzaqueso.jpeg'; // Importa la imagen
import pizzaImagenapo from '../images/pizzanapo.jpeg'; // Importa la imagen

const Carrusel = () => {
    return (
        <div className="carrusel-container">
            <Carousel showThumbs={false} autoPlay infiniteLoop>
                <div>
                    <img src={pizzaImage} alt="Pizza Margarita" />
                    <p className="legend">Pizza Margarita</p>
                </div>
                <div>
                    <img src={pizzaImagejam} alt="Pizza Pepperoni" />
                    <p className="legend">Pizza Pepperoni</p>
                </div>
                <div>
                    <img src={pizzaImageques} alt="Pizza Hawaiana" />
                    <p className="legend">Pizza Hawaiana</p>
                </div>
                <div>
                    <img src={pizzaImagenapo} alt="Pizza Vegetariana" />
                    <p className="legend">Pizza Vegetariana</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Carrusel;
