import React, { useState } from "react";
import Modal from "../modal/Modal";

const AddCharacter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h3>Agrega un nuevo héroe</h3>
      <button onClick={() => setIsOpen(true)}>Modal</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Ventana modal</h2>
        <p>Ventana modal reutilizable</p>
        <div className="buttons-container">
          <button>Cerrar</button>
          <button>Enviar</button>
        </div>
      </Modal>
    </div>
  );
};

export default AddCharacter;
