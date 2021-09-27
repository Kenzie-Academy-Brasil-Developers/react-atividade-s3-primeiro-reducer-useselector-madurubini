import logo from "./logo.svg";
import "./App.css";
import FruitList from "./components/FruitList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Lista de Frutas</h2>
        <div className="List">
          <FruitList />
        </div>
      </header>
    </div>
  );
}

export default App;
