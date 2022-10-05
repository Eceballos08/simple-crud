import React, { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import "./AddCharacter.css";

export const CharacterForm = ({
  createCharacter,
  updateCharacter,
  isOpen,
  characterToUpdate,
  setIsOpen,
  setCharacterToUpdate,
}) => {
  //to have control of each field of the form
  const [name, setName] = useState("");
  const [power, setPower] = useState("");
  const [state, setState] = useState("");

  //function to close the modal
  const onCancel = () => {
    setIsOpen(false);
    setCharacterToUpdate(null);
  };

  //function to send the new item
  const onSubmit = (e) => {
    console.log({ characterToUpdate });
    const character = { name, power, state };
    e.preventDefault(); //prevent the page reload twice
    if (characterToUpdate) {
      character.id = characterToUpdate.id;
      updateCharacter(character);
    } else {
      //object to add the new character
      createCharacter(character);
      // event.target.reset(); //clean fields
    }
    setIsOpen(false); //close modal
  };

  useEffect(() => {
    console.log("actualizamos EFECT", {
      characterToUpdate,
      name,
      state,
      power,
    });
    if (!isOpen) return;

    if (
      characterToUpdate &&
      characterToUpdate.name != name &&
      characterToUpdate.state != state &&
      characterToUpdate.power != power
    ) {
      setName(characterToUpdate.name);
      setState(characterToUpdate.state);
      setPower(characterToUpdate.power);
    } else if (name !== "" && power !== "" && state !== "") {
      setName("");
      setState("");
      setPower("");
    }
  }, [isOpen, characterToUpdate]);

  return (
    <div>
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
