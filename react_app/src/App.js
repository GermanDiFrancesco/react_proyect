import logo from "./logo.svg";
import "./App.css";
import NoteApp from "./Components/NoteApp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="title">
          <img src={logo} className="App-logo" alt="logo" />
          Welcome to Orga<strong>nice</strong>
        </span>
      </header>   
      <NoteApp/>

    </div>


  );
}

export default App;
