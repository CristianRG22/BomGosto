// Testimonios.js
import React, { useState } from 'react';
import '../../styles/Body/Testimonies.css';

const Testimonios = () => {
  const [testimonios, setTestimonios] = useState([
    {
      nombre: 'Juan Pérez',
      comentario: 'La Coxinha es la mejor que he probado. El ambiente del restaurante es acogedor y el servicio es excelente. ¡Definitivamente volveré!',
    },
    {
      nombre: 'María Gómez',
      comentario: 'La Feijoada es simplemente deliciosa. Me encanta venir a Bom Gosto con mi familia. ¡Recomendado al 100%!',
    },
    {
      nombre: 'Carlos Rodríguez',
      comentario: 'El Brigadeiro es increíble. El sabor es auténtico y el personal es muy amable. ¡Un lugar perfecto para disfrutar de una buena comida!',
    },
  ]);


  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevoComentario, setNuevoComentario] = useState('');
  const [error, setError] = useState('');

  const handleAgregarTestimonio = () => {
    if (nuevoNombre.trim() === '' || nuevoComentario.trim() === '') {
        return setError('Por favor, llena todos los campos antes de enviar el comentario ;)');
      
    }

    const nuevoTestimonio = {
      nombre: nuevoNombre,
      comentario: nuevoComentario,
    };
    setTestimonios([...testimonios, nuevoTestimonio]);
    setNuevoNombre('');
    setNuevoComentario('');
    setError('');
  };

  return (
    <div className="testimonios">
      <h2>Testimonios de nuestros clientes</h2>
      {testimonios.map((testimonio, index) => (
        <div key={index} className="testimonio">
          <h3>{testimonio.nombre}</h3>
          <p>"{testimonio.comentario}"</p>
        </div>
      ))}
      <div className="nuevo-testimonio">
        <input
          type="text"
          placeholder="Tu nombre"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
        />
        <textarea
          placeholder="Tu comentario"
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
        ></textarea>
        <button onClick={handleAgregarTestimonio}>Agregar Testimonio</button>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Testimonios;
