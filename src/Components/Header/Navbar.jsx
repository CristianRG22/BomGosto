import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../styles/Header/Navbar.css';

import Menu from './NavComponents/MenuComponent';
import Promotions from './NavComponents/PromotionsComponent';
import Track from './NavComponents/TrackComponent';
import Us from './NavComponents/UsComponent';

Modal.setAppElement('#root');

function Navbar() {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Gosto Bom</a>
      </div>
      <button className="menu-button" onClick={toggleHamburgerMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      {isHamburgerOpen && (
        <Modal
          isOpen={isHamburgerOpen}
          onRequestClose={toggleHamburgerMenu}
          contentLabel="Hamburger Menu"
          style={{
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white', // Asegúrate de que el fondo sea blanco
              color: 'black', // Asegúrate de que el texto sea negro
              width: '80%', // Ajusta el ancho del modal
              height: '80%', // Ajusta la altura del modal
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          <div className="hamburger-menu">
            <p onClick={() => openModal('menu')}>Menú</p>
            <p onClick={() => openModal('promotions')}>Promociones</p>
            <p onClick={() => openModal('order-tracker')}>Sigue tu pedido</p>
            <p onClick={() => openModal('us')}>Nosotros</p>
          </div>
        </Modal>
      )}
      <ul className="navbar-links">
        <li><a href="#" onClick={() => openModal('menu')}>Menú</a></li>
        <li><a href="#" onClick={() => openModal('promotions')}>Promociones</a></li>
        <li><a href="#" onClick={() => openModal('order-tracker')}>Sigue tu pedido</a></li>
        <li><a href="#" onClick={() => openModal('us')}>Nosotros</a></li>
      </ul>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <div>
          {modalContent === 'menu' && <Menu isOpen={isModalOpen} onRequestClose={closeModal} />}
          {modalContent === 'promotions' && <Promotions isOpen={isModalOpen} onRequestClose={closeModal} />}
          {modalContent === 'order-tracker' && <Track isOpen={isModalOpen} onRequestClose={closeModal} />}
          {modalContent === 'us' && <Us isOpen={isModalOpen} onRequestClose={closeModal} />}
        </div>
      </Modal>
    </nav>
  );
}

export default Navbar;
