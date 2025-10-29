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
    },
  ]);

  function updateString(string) {
    setKeyboardString(string);
  }

  function deleteStyles() {
    setStyles([
      {
        color: "grey",
      },
    ]);
  }

  function addEmptyStyle() {
    setStyles([...styles, { color: "grey" }]);
  }

  function updateStyle(style) {
    const newStyle = [...styles];
    newStyle[newStyle.length - 1] = {
      ...newStyle[newStyle.length - 1],
      ...style,
    };
    setStyles(newStyle);
  }

  function clearStyles() {
    setKeyboardString("§" + keyboardString.replaceAll("§", ""));
    const newStyle = styles.length > 0 ? styles[styles.length - 1] : {};
    setStyles([newStyle]);
  }

  return (
    <>
      <Screen keyboardString={keyboardString} styles={styles} />
      <div id="bodyContainer">
        <div id="container">
          <Keyboard
            updateString={(string) => updateString(string)}
            addEmptyStyle={addEmptyStyle}
            deleteStyles={deleteStyles}
          />
        </div>
        <StyleButtons
          updateStyle={(style) => updateStyle(style)}
          addToString={(char) => updateString((prev) => prev + char)}
          addEmptyStyle={addEmptyStyle}
          clearStyles={clearStyles}
        />
      </div>
    </>
  );
}

export default App;
