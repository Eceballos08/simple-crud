import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import CharacterTable from "./CharacterTable";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
  //creamos un hook de estado para manejar el array con los datos
  const [character, setCharacter] = useState(characterData);

  //agregar nuevo personaje
  const addCharacter = (newCharacter) => {
    newCharacter.id = uuidv4();
    setCharacter([...character, newCharacter]);
  };
  return (
    <>
      <Container>
        <br />
        <Button color="primary">Inserta nuevo personaje </Button>
        <br />
        <br />

        <CharacterTable character={character} />
      </Container>
    </>
  );
}

export default App;
