import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidas a Taconeras"} />
      <ItemCount
        initial={1}
        stock={10}
        onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
      />
    </div>
  );
}

export default App;
