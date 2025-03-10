import "./App.css";
import { Nav } from "./nav";
import { Main } from "./pages";
import NavProvider from "./context/NavContext";

function App() {
  return (
    <div className="App">
      <NavProvider>
        <Nav />
        <Main />
      </NavProvider>
    </div>
  );
}

export default App;
