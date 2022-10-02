import React, { useState } from "react";
import Modal from "../modal/Modal";
import "./CharacterTable.css";

const CharacterTable = (props) => {
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  return (
    <>
      <button>Insertar</button>
      <table>
        <thead>
          <tr>
            <th>Personaje</th>
            <th>Poder</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {props.character.length > 0 ? (
            props.character.map((character) => (
              <tr key={character.id}>
                <td>{character.nombre}</td>
                <td>{character.poder}</td>
                <td>{character.estado}</td>
                <td>
                  <button
                    color="primary"
                    onClick={() => setOpenUpdateModal(true)}
                  >
                    Editar
                  </button>
                  {"  "}
                  <button color="danger">Eliminar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>Sé el primero en agregar un héroe</td>
            </tr>
          )}
        </tbody>
      </table>

      <Modal open={openUpdateModal} onClose={() => setOpenUpdateModal(false)} />
    </>
  );
};

export default CharacterTable;
