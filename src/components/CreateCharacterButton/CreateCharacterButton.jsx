import React from "react";

const CreateCharacterButton = ({ setIsOpen }) => {
  return (
    <div>
      <div className="header-container">
        <h1>Agrega un nuevo héroe</h1>
        <button onClick={() => setIsOpen(true)}>Insertar</button>
      </div>
    </div>
  );
};

export default CreateCharacterButton;
