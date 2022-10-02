import React, { useState } from "react";
import CreateCharacter from "../createCharacter/CreateCharacter";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h3>Agrega un nuevo héroe</h3>
      <button onClick={() => setIsOpen(true)}>Modal</button>
      <CreateCharacter open={isOpen} onClose={() => setIsOpen(false)}>
        <h3>Modal</h3>
        <p>hola esta es la modal</p>
      </CreateCharacter>
    </div>
  );
};

export default Modal;
