import { useState } from "react";
import "./App.css";
import Screen from "./components/Screen";
import Keyboard from "./components/Keyboard";
import StyleButtons from "./components/StyleButtons";

function App() {
  const [keyboardString, setKeyboardString] = useState("§");
  const [styles, setStyles] = useState([
    {
      color: "grey",
      size: 100,
    },
  ]);

  function updateString(string) {
    setKeyboardString(string);
  }

  function deleteStyles() {
    setStyles([
      {
        color: "grey",
        size: 100,
      },
    ]);
  }
  function addEmptyStyle() {
    setStyles([...styles, {}]);
  }
  function updateStyle(style) {
    const newStyle = [...styles];
    newStyle[newStyle.length - 1] = {
      ...newStyle[newStyle.length - 1],
      ...style,
    };
    setStyles(newStyle);
  }

  return (
    <>
      <Screen keyboardString={keyboardString} styles={styles} />
      <Keyboard
        updateString={(string) => updateString(string)}
        addEmptyStyle={addEmptyStyle}
        deleteStyles={deleteStyles}
      />
      <StyleButtons updateStyle={(style) => updateStyle(style)} />
    </>
  );
}

export default App;
