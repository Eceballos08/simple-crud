import React, { useState } from "react";
import Modal from "../modal/Modal";
import "./AddCharacter.css";

const AddCharacter = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  //to have control of each field of the form
  const [name, setName] = useState("");
  const [power, setPower] = useState("");
  const [state, setState] = useState("");

  //function to close the modal
  const onCancel = () => {
    setIsOpen(false);
  };

  //function to send the new item
  const onSubmit = (e) => {
    //object to add the new character
    const character = { name, power, state };
    e.preventDefault(); //prevent the page reload twice
    props.createCharacter(character);
    setIsOpen(false); //close modal
    // event.target.reset(); //clean fields
  };

  return (
    <div>
      <div className="header-container">
        <h3>Agrega un nuevo héroe</h3>
        <button className="add-button" onClick={() => setIsOpen(true)}>
          Insertar
        </button>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <form>
          <label>Personaje</label>
          <input
            onChange={(event) => setName(event.target.value)}
            value={name}
            type="text"
            name="name"
          />
          <label>Poder</label>
          <input
            onChange={(event) => setPower(event.target.value)}
            value={power}
          />
          <label>Estado</label>
          <input
            onChange={(event) => setState(event.target.value)}
            value={state}
          />
          <div className="buttons-container">
            <button
              className="modal-button close"
              type="button"
              onClick={onCancel}
            >
              Cerrar
            </button>
            <button
              className="modal-button submit"
              onClick={onSubmit}
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddCharacter;
