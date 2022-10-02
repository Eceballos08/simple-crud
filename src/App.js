import CharacterTable from "./components/table/CharacterTable";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddCharacter from "./components/addCharacter/AddCharacter";

function App() {
  const characterData = [
    {
      id: uuidv4(),
      nombre: "Iron Man",
      poder: "Inteligencia",
      estado: "Muerto",
    },
    { id: uuidv4(), nombre: "Thor", poder: "Dios del trueno", estado: "Vivo" },
    {
      id: uuidv4(),
      nombre: "Black Widow",
      poder: "Destreza física",
      estado: "Muerta",
    },
    {
      id: uuidv4(),
      nombre: "Capitan America",
      poder: "Fuerza",
      estado: "Muerto",
    },
    { id: uuidv4(), nombre: "Hulk", poder: "Fuerza", estado: "Vivo" },
    {
      id: uuidv4(),
      nombre: "Capitana Marvel",
      poder: "Fuerza sobrehumana",
      estado: "Viva",
    },
    {
      id: uuidv4(),
      nombre: "Spiderman",
      poder: "Sentido arácnido",
      estado: "Vivo",
    },
    {
      id: uuidv4(),
      nombre: "Doctor Strange",
      poder: "Magia",
      estado: "Vivo",
    },
    {
      id: uuidv4(),
      nombre: "Bruja Escarlata",
      poder: "Telequinisis",
      estado: "N/A",
    },
  ];
  //we create a state hook to controll the array with the data
  const [character, setCharacter] = useState(characterData);

  //add new character
  // const addCharacter = (newCharacter) => {
  //   newCharacter.id = uuidv4();
  //   setCharacter([...character, newCharacter]);
  // };

  return (
    <>
      <div>
        <br />
        <AddCharacter />
        <br />
        <br />

        <CharacterTable character={character} />
      </div>
    </>
  );
}

export default App;
