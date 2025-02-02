import React, { useEffect } from 'react';
import Modal from 'react-modal';
import '../../../Styles/Header/Promotions.css';

function Promociones({ isOpen, onRequestClose }) {
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

  const promociones = [
    {
      titulo: 'Descuento del Día',
      descripcion: 'Ofrecemos un descuento especial en un plato diferente cada día de la semana. ¡No te lo pierdas!',
    },
    {
      titulo: 'Combo Familiar',
      descripcion: 'Disfruta de nuestro Combo Familiar: Coxinha + Feijoada + Brigadeiro por solo $25.00.',
    },
    {
      titulo: 'Happy Hour',
      descripcion: 'Aprovecha nuestro Happy Hour: 2x1 en Caipirinhas de 5:00 PM a 7:00 PM.',
    },
    {
      titulo: 'Promoción de Fin de Semana',
      descripcion: 'Fin de Semana Especial: 10% de descuento en todos los platos principales.',
    },
    {
      titulo: 'Tarjeta de Fidelidad',
      descripcion: 'Acumula 10 puntos y obtén un postre gratis con nuestra Tarjeta de Fidelidad.',
    },
    {
      titulo: 'Menú del Chef',
      descripcion: 'Disfruta de nuestro Menú del Chef: Entrada + Plato Principal + Postre por solo $30.00.',
    },
  ];

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="modal-header">
        <h1>Promociones</h1>
        <button className="close-button" onClick={onRequestClose}>
          <div style={{ transform: 'rotate(45deg)', position: 'absolute' }}></div>
          <div style={{ transform: 'rotate(-45deg)', position: 'absolute' }}></div>
        </button>
      </div>
      <div className="promociones-content">
        <div className="promociones-grid">
          {promociones.map((promo, index) => (
            <div key={index} className="promocion-card">
              <h3>{promo.titulo}</h3>
              <p>{promo.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default Promociones;
