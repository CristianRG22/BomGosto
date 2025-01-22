import React, { useState } from 'react';

function ButtonInfoM() {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Nuestro menu</button>
      {showInfo && <p>Aquí está la información.</p>}
    </div>
  );
}

export default ButtonInfoM;
