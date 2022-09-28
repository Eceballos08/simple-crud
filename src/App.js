import logo from "./logo.svg";
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

const data = [
  { id: 1, nombre: "Iron Man", poder: "Inteligencia", estado: "Muerto" },
  { id: 2, nombre: "Thor", poder: "Dios del trueno", estado: "Vivo" },
  {
    id: 3,
    nombre: "Black Widow",
    poder: "Destreza física",
    estado: "Muerta",
  },
  { id: 4, nombre: "Capitan America", poder: "Fuerza", estado: "Muerto" },
  { id: 5, personaje: "Hulk", poder: "Fuerza", estado: "Vivo" },
  {
    id: 6,
    nombre: "Capitana Marvel",
    poder: "Fuerza sobrehumana",
    estado: "Viva",
  },
  { id: 7, nombre: "Spiderman", poder: "Sentido arácnido", estado: "Vivo" },
  { id: 8, personaje: "Doctor Strange", poder: "Magia", estado: "Vivo" },
  { id: 8, nombre: "Bruja Escarlata", poder: "Telequinisis", estado: "N/A" },
];

function App() {
  return (
    <>
      <Container>
        <br />
        <Button color="primary">Insertar nuevo personaje </Button>
        <br />
        <br />

        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Personaje</th>
              <th>Poder</th>
              <th>Estado</th>
            </tr>
          </thead>
          <CharacterTable />
        </Table>
      </Container>
    </>
  );
}

export default App;
