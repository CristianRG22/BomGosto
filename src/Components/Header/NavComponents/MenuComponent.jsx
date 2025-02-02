import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../../../Styles/Header/Menu.css';

function Menu({ isOpen, onRequestClose }) {
  const [activeTab, setActiveTab] = useState('entradas');

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
  
  const productos = {
    entradas: [
      { nombre: 'Coxinha', descripcion: 'Croquetas de pollo desmenuzado, empanizadas y fritas.', precio: '$3.00', imagen: 'https://cdn0.tudoreceitas.com/pt/posts/1/9/1/coxinha_simples_191_orig.jpg' },
      { nombre: 'Pão de Queijo', descripcion: 'Panecillos de queso, crujientes por fuera y suaves por dentro.', precio: '$2.50', imagen: 'https://i1.wp.com/ncultura.pt/wp-content/uploads/2017/11/shutterstock-579999919-e1510831911710.jpg?fit=2000%2C1335&ssl=1' },
      { nombre: 'Bolinho de Bacalhau', descripcion: 'Croquetas de bacalao, perfectas para empezar la comida.', precio: '$4.00', imagen: 'https://clube-static.clubegazetadopovo.com.br/portal/wp-content/uploads/2020/04/materiasrepositorio-1563547891.jpeg' },
      { nombre: 'Esfirra', descripcion: 'Empanadas de carne, pollo o queso, típicas de la cocina árabe-brasileña.', precio: '$3.50', imagen: 'https://th.bing.com/th/id/R.dc0c9ca123e6be5907942dcf709d4128?rik=bWKW4IgdldG2PA&pid=ImgRaw&r=0' },
      { nombre: 'Pastel', descripcion: 'Empanadas fritas rellenas de carne, queso o camarones.', precio: '$3.00', imagen: 'https://receitasdepesos.com.br/wp-content/uploads/2023/06/pastel-de-queijo-scaled.jpg' },
      { nombre: 'Acarajé', descripcion: 'Bolas de frijol negro fritas, rellenas de camarones y vatapá.', precio: '$4.50', imagen: 'https://www.bbmag.co.uk/wp-content/uploads/2019/05/shutterstock_1804757272-scaled.jpg' },
    ],
    principales: [
      { nombre: 'Feijoada', descripcion: 'Guiso tradicional de frijoles negros con carne de cerdo.', precio: '$15.00', imagen: 'https://th.bing.com/th/id/OIP.JjQ19mgEKxWQHMAd5A40ZQHaE_?rs=1&pid=ImgDetMain' },
      { nombre: 'Moqueca', descripcion: 'Estofado de pescado y mariscos cocido en leche de coco.', precio: '$18.00', imagen: 'https://static01.nyt.com/images/2016/03/16/dining/16MOQUECA/16MOQUECA-superJumbo.jpg' },
      { nombre: 'Churrasco', descripcion: 'Carne asada al estilo brasileño.', precio: '$20.00', imagen: 'https://th.bing.com/th/id/OIP.QM6vkZQV7NpjcpHOMQeabQHaE8?rs=1&pid=ImgDetMain' },
      { nombre: 'Vatapá', descripcion: 'Guiso de camarones, pan, leche de coco y aceite de palma.', precio: '$16.00', imagen: 'https://divinacocina.com.br/wp-content/uploads/2022/08/Vatapa-com-camarao.jpg' },
      { nombre: 'Bobó de Camarão', descripcion: 'Guiso de camarones con puré de yuca y leche de coco.', precio: '$17.00', imagen: 'https://th.bing.com/th/id/R.139fd52438bbd7040c01700484d8feb2?rik=iwGzsu63SrarlA&pid=ImgRaw&r=0' },
      { nombre: 'Escondidinho', descripcion: 'Pastel de carne o pollo cubierto con puré de yuca.', precio: '$14.00', imagen: 'https://cdn.tasteatlas.com/images/dishes/9ff66fd2f9bf4cc581ce163f07d25d8a.jpg' },
    ],
    postres: [
      { nombre: 'Brigadeiro', descripcion: 'Dulces de chocolate y leche condensada.', precio: '$5.00', imagen: 'https://th.bing.com/th/id/OIP.WgZUGdI1sNKiIHSAZFpqmwHaE8?rs=1&pid=ImgDetMain' },
      { nombre: 'Quindim', descripcion: 'Postre de coco y yema de huevo, con una textura suave y cremosa.', precio: '$6.00', imagen: 'https://receitasmaravilhosas.net/wp-content/uploads/2022/05/3-18.jpg' },
      { nombre: 'Pudim de Leite', descripcion: 'Flan de leche condensada, similar al flan tradicional.', precio: '$4.00', imagen: 'https://th.bing.com/th/id/R.ebf24f8b60474c1b70bf8a6b398e388b?rik=brNAiHCcyYnuDQ&pid=ImgRaw&r=0' },
      { nombre: 'Beijinho', descripcion: 'Dulces de coco y leche condensada, cubiertos con azúcar.', precio: '$5.00', imagen: 'https://th.bing.com/th/id/R.13f895c5d4b627f047aced1cdbbb2e6f?rik=gDhkotu0RijTDw&pid=ImgRaw&r=0' },
      { nombre: 'Romeu e Julieta', descripcion: 'Postre de queso y dulce de guayaba.', precio: '$4.50', imagen: 'https://blog.amigofoods.com/wp-content/uploads/2020/08/romeu-e-julieta-sobremesa.jpg' },
      { nombre: 'Bolo de Rolo', descripcion: 'Pastel enrollado con capas de masa y dulce de guayaba.', precio: '$6.00', imagen: 'https://th.bing.com/th/id/R.9ade647269f1a378ca17b293f96539c4?rik=6pOoQ6CyTwB9RA&riu=http%3a%2f%2fjantinhadehoje.com.br%2fwp-content%2fuploads%2f2016%2f05%2fimg_2248.jpg&ehk=%2b0u0frXrHEAZerq9P%2fDezmakxtMQFbwaLtzTz8H1k04%3d&risl=&pid=ImgRaw&r=0' },
    ],
    bebidas: [
      { nombre: 'Caipirinha', descripcion: 'Cóctel brasileño hecho con cachaça, azúcar y lima.', precio: '$7.00', imagen: 'https://th.bing.com/th/id/R.8427a9280d6e0fa6136b121c17e4dc62?rik=ooZjB4yYYaU1zg&riu=http%3a%2f%2fassets.epicurious.com%2fphotos%2f579a2d8e437fcffe02f7230b%2fmaster%2fpass%2fcaipirinha-072816.jpg&ehk=s0czYnnZZEV1%2bJel%2ff8vrWWdrNjwq%2fQoC13AsmGN2Ys%3d&risl=&pid=ImgRaw&r=0' },
      { nombre: 'Guaraná', descripcion: 'Refresco brasileño hecho con extracto de guaraná.', precio: '$3.00', imagen: 'https://blog.amigofoods.com/wp-content/uploads/2020/08/guarana-soda-1024x683.jpg' },
      { nombre: 'Batida de Coco', descripcion: 'Cóctel cremoso hecho con leche de coco y cachaça.', precio: '$6.00', imagen: 'https://receitas.gratis/wp-content/uploads/2013/04/batida-de-coco.jpg' },
      { nombre: 'Suco de Maracujá', descripcion: 'Jugo de maracuyá fresco.', precio: '$4.00', imagen: 'https://folhago.com.br/blogs/receitas-faceis/wp-content/uploads/2021/09/suco-de-maracuja1-canvapro.jpg' },
      { nombre: 'Café Brasileiro', descripcion: 'Café brasileño fuerte y aromático.', precio: '$2.50', imagen: 'https://c.pxhere.com/photos/35/98/coffee_teacup_the_drink_white_black_brown_a_cup_of_coffee_coffee_maker-787062.jpg!d' },
      { nombre: 'Chá Mate', descripcion: 'Té de yerba mate, una bebida tradicional brasileña.', precio: '$3.50', imagen: 'https://dicademusculacao.com.br/wp-content/uploads/2017/07/cha-mate.jpg' },
    ],
  };

  const renderContent = () => {
    return (
      <div className="productos">
        {productos[activeTab].map((producto, index) => (
          <div key={index} className="producto-card">
            <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p><strong>Precio:</strong> {producto.precio}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="modal-header">
        <h1>Nuestro Menú</h1>
        <button className="close-button" onClick={onRequestClose}>
          <div style={{ transform: 'rotate(45deg)', position: 'absolute' }}></div>
          <div style={{ transform: 'rotate(-45deg)', position: 'absolute' }}></div>
        </button>
      </div>
      <div className="tabs">
        <button onClick={() => setActiveTab('entradas')}>Entradas</button>
        <button onClick={() => setActiveTab('principales')}>Platos Principales</button>
        <button onClick={() => setActiveTab('postres')}>Postres</button>
        <button onClick={() => setActiveTab('bebidas')}>bebidas</button>
      </div>
      <div className="tab-content">
        {renderContent()}
      </div>
    </Modal>
  );
}

export default Menu;
