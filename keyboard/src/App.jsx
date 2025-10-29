import { useState } from "react";
import "./App.css";
import Screen from "./components/Screen";
import Keyboard from "./components/Keyboard";

function App() {
  const [keyboardString, setKeyboardString] = useState("");

  function updateString(string) {
    setKeyboardString(string);
  }

  return (
    <>
      <Screen keyboardString={keyboardString} />
      <Keyboard updateString={(string) => updateString(string)} />
    </>
  );
}

export default App;
