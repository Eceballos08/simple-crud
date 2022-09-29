import React, { useState } from "react";
import Modal from "./Modal";

const AddNewCharacter = () => {
  return (
    <>
      <button color="primary">Inserta nuevo personaje</button>
      {/*Modal to add new character */}
      <Modal>
        <br />
        <h3>Agrega un nuevo héroe</h3>
        <br />
        <br />
        <form>
          <div>
            <label>Nombre del héroe</label>
            <input className="form-control" name="nombre" type="text" />
          </div>
          <div>
            <label>Poder</label>
            <input className="form-control" name="poder" type="text" />
          </div>
          <div>
            <label>Estado</label>
            <input className="form-control" name="estado" type="text" />
          </div>
        </form>
        <br />

        <button color="primary" type="submit">
          Guardar
        </button>
        <button color="danger" type="button">
          Cancelar
        </button>
      </Modal>
    </>
  );
};

export default AddNewCharacter;
