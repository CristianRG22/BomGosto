// src/Components/Track.jsx
import React from 'react';
import Modal from 'react-modal';

function Track({ isOpen, onRequestClose }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Sigue tu Pedido</h2>
      <p>Pestaña en desarrollo, disculpanos :)</p>
      <button onClick={onRequestClose}>Cerrar</button>
    </Modal>
  );
}

export default Track;
