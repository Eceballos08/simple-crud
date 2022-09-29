import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "reactstrap";

const CharacterTable = (props) => {
  return (
    <Table>
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
                <Button color="primary">Editar</Button>
                {"  "}
                <Button color="danger">Eliminar</Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4}>Sé el primero en agregar un héroe</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default CharacterTable;
