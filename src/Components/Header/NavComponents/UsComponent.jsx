import React, { useEffect } from 'react';
import Modal from 'react-modal';
import '../../../Styles/Header/Us.css';

function Us({ isOpen, onRequestClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="modal-content">
        <div className="nosotros-texto">
          <h2>Nosotros</h2>
          <p>
            Somos una familia que lleva los sabores auténticos de Brasil a otros lados. En Bom Gosto, nos apasiona ofrecerte una experiencia culinaria única que celebra los sabores auténticos de Brasil. Desde nuestras deliciosas entradas hasta nuestros exquisitos postres, cada plato es preparado con ingredientes frescos y de alta calidad. Nuestro equipo de chefs talentosos y dedicados trabaja con amor y esmero para brindarte lo mejor de la gastronomía brasileña.
          </p>
          <p>
            Nos enorgullece ser un lugar donde amigos y familias pueden reunirse para disfrutar de una comida deliciosa en un ambiente acogedor y amigable. Gracias por elegir Bom Gosto. ¡Esperamos verte pronto!
          </p>
          <h3>Visión</h3>
          <p>
            Ser el restaurante de referencia en la región, reconocido por nuestra autenticidad, calidad y hospitalidad, llevando los sabores de Brasil a cada rincón.
          </p>
          <h3>Misión</h3>
          <p>
            Ofrecer una experiencia culinaria excepcional que celebre la rica tradición gastronómica de Brasil, utilizando ingredientes frescos y de alta calidad, y brindando un servicio cálido y acogedor a nuestros clientes.
          </p>
        </div>
        <button className="close-button" onClick={onRequestClose}>
          <div style={{ transform: 'rotate(45deg)', position: 'absolute' }}></div>
          <div style={{ transform: 'rotate(-45deg)', position: 'absolute' }}></div>
        </button>
      </div>
    </Modal>
  );
}

export default Us;
