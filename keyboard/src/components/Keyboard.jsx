import { useState } from "react";
import "../App.css";

const hebrew = [
  "א",
  "ב",
  "ג",
  "ד",
  "ה",
  "ו",
  "ז",
  "ח",
  "ט",
  "י",
  "כ",
  "ל",
  "מ",
  "נ",
  "ס",
  "ע",
  "פ",
  "צ",
  "ק",
  "ר",
  "ש",
  "ת",
  "ך",
  "ם",
  "ן",
  "ף",
  "ץ",
];
const english = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const emojis = [
  "😊",
  "😂",
  "😍",
  "🥺",
  "🥳",
  "😎",
  "😇",
  "🤔",
  "😜",
  "😢",
  "🤩",
  "🤗",
  "🙌",
  "🙏",
  "🔥",
  "💯",
  "🎉",
  "🎈",
  "💖",
  "🌟",
];
const keyboardSymbols = [
  ".",
  ",",
  ";",
  ":",
  "'",
  '"',
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "=",
  "+",
  "{",
  "}",
  "[",
  "]",
  "\\",
  "|",
  "<",
  ">",
  "/",
  "?",
];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function Keyboard({ updateString, deleteStyles }) {
  const [language, setLanguage] = useState("hebrew");
  function addToString(char) {
    updateString((prev) => prev + char);
  }
  function removeLastChar() {
    updateString((str) => {
      if (str.length !== 0) {
        const arr = Array.from(str);
        arr.pop();
        return arr.join("");
      }
      return str;
    });
  }

  const addNumbers = () => {
    return numbers.map((num, index) => (
      <button onClick={() => addToString(num)} key={index}>
        {num}
      </button>
    ));
  };
  const generateButtons = (arr) => {
    return arr.map((item, index) => (
      <button onClick={() => addToString(item)} key={index}>
        {item}
      </button>
    ));
  };
  function deleteall() {
    updateString("§");
    deleteStyles();
  }

  return (
    <>
      <div id="keyboard">
        <button onClick={() => removeLastChar()}>⌫</button>
        {addNumbers()}
        <button onClick={deleteall}>🗑️</button>
        {<br />}
        {language === "hebrew" && generateButtons(hebrew)}
        {language === "english" && generateButtons(english)}
        {language === "emojis" && generateButtons(emojis)}
        {language === "Symbols" && generateButtons(keyboardSymbols)}
        <div>
          <button id="spacebar" onClick={() => addToString(" ")}>
            רווח
          </button>
        </div>
        <div>
          <button onClick={() => setLanguage("hebrew")}>עברית</button>
          <button onClick={() => setLanguage("english")}>English</button>
          <button onClick={() => setLanguage("emojis")}>אימוג'ים</button>
          <button onClick={() => setLanguage("Symbols")}>סימנים</button>
        </div>
      </div>
      <br />
    </>
  );
}

export default Keyboard;
