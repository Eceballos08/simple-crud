import React, { useState } from "react";
import Modal from "../modal/Modal";
import "./AddCharacter.css";

const AddCharacter = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newItem, setNewItem] = useState("");

  const onCancel = () => {};
  const onChange = (event) => {
    setNewItem(event.target.value);
  };

  const onSubmit = () => {
    console.log("envía algo");
  };

  const createCharacter = () => {};

  const updateCharacter = () => {};
  const deleteCharacter = () => {};

  return (
    <div>
      <h3>Agrega un nuevo héroe</h3>
      <button onClick={() => setIsOpen(true)}>Modal</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <form onSubmit={onSubmit}>
          <label>Personaje</label>
          <input onChange={onChange} type="text" name="name" />
          <label>Poder</label>
          <input onChange={onChange} type="text" name="power" />
          <label>Estado</label>
          <input onChange={onChange} type="text" name="state" />
        </form>

        <div className="buttons-container">
          <button
            className="modal-button close"
            type="button"
            onClick={onCancel}
          >
            Cerrar
          </button>
          <button className="modal-button submit" type="submit">
            Enviar
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddCharacter;
