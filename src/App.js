import "./App.css";
import Pages from "./components/Pages";
import MainNav from "./components/MainNav";
import Login from "./Login";
import { useState } from "react";
import TopHeader from "./TopHeader";

function App() {
  const [activeComponent, setActiveComponent] = useState("dash");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavLinks = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="App">
      <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {isLoggedIn && (
        <TopHeader
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />
      )}
      {isLoggedIn && (
        <Pages
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />
      )}
      {isLoggedIn && (
        <MainNav
          handleNavLinks={handleNavLinks}
          activeComponent={activeComponent}
        />
      )}
    </div>
  );
}

export default App;
