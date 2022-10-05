import React from "react";
import CharacterTable from "../components/CharacterTable/CharacterTable";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CreateCharacterButton from "../components/CreateCharacterButton/CreateCharacterButton";
import { CharacterForm } from "../components/CharacterForm/CharacterForm";

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
  const [characters, setCharacters] = useState(characterData);
  const [characterToUpdate, setCharacterToUpdate] = useState(null);
  const [isOpen, setIsOpen] = useState(false); //to control modal

  const createCharacter = (newCharacter) => {
    newCharacter.id = uuidv4();
    setCharacters([...characters, newCharacter]);
  };

  const deleteCharacter = (id) => {
    //we do a filter were the function "filter" have a parameter and go through all characters and ask if the item.id is diferent to the item which we selected
    //returns an array
    setCharacters(characters.filter((character) => character.id !== id));
    // //other way:
    // const characterIndex = characters.findIndex(
    //   (character) => character.id === id
    // );
    // const newCharacters = [...characters];
    // newCharacters.splice(characterIndex, 1);
    // setCharacters(newCharacters);
  };

  const updateCharacter = (updatedCharacter) => {
    const newCharacter = characters.map((character) =>
      character.id === updatedCharacter.id ? updatedCharacter : character
    );
    characterToUpdate(null);
    setCharacters(newCharacter);
  };

  return (
    <>
      <div>
        <br />
        <CharacterForm
          createCharacter={createCharacter}
          updateCharacter={updateCharacter}
          isOpen={isOpen}
          characterToUpdate={characterToUpdate}
          setIsOpen={setIsOpen}
          setCharacterToUpdate={setCharacterToUpdate}
        />
        <CreateCharacterButton setIsOpen={setIsOpen} />
        <CharacterTable
          characters={characters}
          updateCharacter={updateCharacter}
          deleteCharacter={deleteCharacter}
          setIsOpen={setIsOpen}
          setCharacterToUpdate={setCharacterToUpdate}
        />
      </div>
    </>
  );
};
