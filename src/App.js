import "./App.css";
import Pages from "./components/pages/Pages";
import MainNav from "./components/MainNav";
import { useState } from "react";

function App() {
  const [activeComponent, setActiveComponent] = useState("disp");
  const handleNavLinks = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="App">
      <Pages
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      <MainNav
        handleNavLinks={handleNavLinks}
        activeComponent={activeComponent}
      />
    </div>
  );
}

export default App;
