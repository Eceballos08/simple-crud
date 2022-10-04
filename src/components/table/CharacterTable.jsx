import React, { useState } from "react";
import Modal from "../modal/Modal";
import "./CharacterTable.css";

const CharacterTable = (props) => {
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  return (
    <div className="table-container">
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
          {props.characters.length > 0 ? (
            props.characters.map((character) => (
              <tr key={character.id}>
                <td>{character.name}</td>
                <td>{character.power}</td>
                <td>{character.state}</td>
                <td>
                  <button
                    className="button-table update"
                    onClick={() => setOpenUpdateModal(true)}
                  >
                    Editar
                  </button>
                  {"  "}
                  <button
                    className="button-table drop"
                    onClick={() => {
                      props.deleteCharacter(character.id);
                    }}
                  >
                    Eliminar
                  </button>
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
    </div>
  );
};

export default CharacterTable;
