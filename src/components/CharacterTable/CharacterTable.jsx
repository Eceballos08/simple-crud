import React from "react";
import "./CharacterTable.css";

const CharacterTable = ({
  setIsOpen,
  setCharacterToUpdate,
  characters,
  deleteCharacter,
}) => {
  // const { id, name, power, state } = characters;
  const handleOnEditCharacter = (character) => {
    console.log("seteamos", { character });
    setCharacterToUpdate(character);
    setIsOpen(true);
  };

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
          {characters.length > 0 ? (
            characters.map((character) => (
              <tr key={character.id}>
                <td>{character.name}</td>
                <td>{character.power}</td>
                <td>{character.state}</td>
                <td>
                  <button
                    className="button-table update"
                    onClick={() => handleOnEditCharacter(character)}
                  >
                    Editar
                  </button>
                  {"  "}
                  <button
                    className="button-table drop"
                    onClick={() => {
                      deleteCharacter(character.id);
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
    </div>
  );
};

export default CharacterTable;
