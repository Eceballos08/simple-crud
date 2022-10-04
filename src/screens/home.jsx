import React from "react";
import CharacterTable from "../components/table/CharacterTable";
import AddCharacter from "../components/addCharacter/AddCharacter";
import { useDebugValue, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const characterData = [
  {
    id: uuidv4(),
    name: "Iron Man",
    power: "Inteligencia",
    state: "Muerto",
  },
  { id: uuidv4(), name: "Thor", power: "Dios del trueno", state: "Vivo" },
  {
    id: uuidv4(),
    name: "Black Widow",
    power: "Destreza física",
    state: "Muerta",
  },
  {
    id: uuidv4(),
    name: "Capitan America",
    power: "Fuerza",
    state: "Muerto",
  },
  { id: uuidv4(), name: "Hulk", power: "Fuerza", state: "Vivo" },
  {
    id: uuidv4(),
    name: "Capitana Marvel",
    power: "Fuerza sobrehumana",
    state: "Viva",
  },
  {
    id: uuidv4(),
    name: "Spiderman",
    power: "Sentido arácnido",
    state: "Vivo",
  },
  {
    id: uuidv4(),
    name: "Doctor Strange",
    power: "Magia",
    state: "Vivo",
  },
  {
    id: uuidv4(),
    name: "Bruja Escarlata",
    power: "Telequinisis",
    state: "N/A",
  },
];

export const Home = () => {
  //we create a state hook to controll the array with the data
  const [characters, setCharacter] = useState(characterData);

  const createCharacter = (newCharacter) => {
    newCharacter.id = uuidv4();
    setCharacter([...characters, newCharacter]);
  };
  const updateCharacter = () => {};

  const deleteCharacter = (id) => {
    console.log(id);
    // const todoIndex = character.findIndex((todo) => todo.id === text);
    // const newTodos = [...character];
    // newTodos.splice(todoIndex, 1);
    // setTodos(newTodos);
  };

  return (
    <>
      <div>
        <br />
        <AddCharacter createCharacter={createCharacter} />
        <br />
        <br />

        <CharacterTable
          characters={characters}
          deleteCharacter={deleteCharacter}
        />
      </div>
    </>
  );
};
