import React, { useState } from 'react';
import Modal from 'react-modal';
import '../Styles/Navbar.css';


Modal.setAppElement('#root');

function Navbar() {
  const [modalContent, setModalContent] = useState(null);
  const [showLinks, setShowLinks] = useState(false);

  const openModal = () => {
    setShowLinks(true);
  };

  const closeModal = () => {
    setShowLinks(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Gosto Bom</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#" onClick={() => openModal('menu')}>Menú</a></li>
        <li><a href="#" onClick={() => openModal('promotions')}>Promociones</a></li>
        <li><a href="#" onClick={() => openModal('order-tracker')}>Sigue tu pedido</a></li>
        <li><a href="#" onClick={() => openModal('stores')}>Tiendas</a></li>
      </ul>
      <button className="menu-button" onClick={openModal}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <Modal
        isOpen={showLinks}
        onRequestClose={closeModal}
        contentLabel="Más"
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
          <h2>Más</h2>
          <ul>
            <li><a href="#" onClick={() => openModal('menu')}>Menú</a></li>
            <li><a href="#" onClick={() => openModal('promotions')}>Promociones</a></li>
            <li><a href="#" onClick={() => openModal('order-tracker')}>Sigue tu pedido</a></li>
            <li><a href="#" onClick={() => openModal('stores')}>Tiendas</a></li>
          </ul>
          <button onClick={closeModal}>Cerrar</button>
        </div>
      </Modal>
    </nav>
  );
}

export default Navbar;
