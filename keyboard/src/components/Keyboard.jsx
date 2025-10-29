import { useState } from "react";

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
].reverse();
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

function Keyboard({ updateString, addEmptyStyle, deleteStyles }) {
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
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
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
    updateString("");
    deleteStyles();
  }

  return (
    <>
      <div>
        <button onClick={() => removeLastChar()}>⌫</button>
        <button onClick={deleteall}>🗑️</button>
        {addNumbers()}
        {<br />}
        {language === "hebrew" && generateButtons(hebrew)}
        {language === "english" && generateButtons(english)}
        {language === "emojis" && generateButtons(emojis)}
        <div>
          <button onClick={() => addToString(" ")}>רווח</button>
        </div>
        <div>
          <button onClick={() => setLanguage("hebrew")}>עברית</button>
          <button onClick={() => setLanguage("english")}>English</button>
          <button onClick={() => setLanguage("emojis")}>אימוג'ים</button>
        </div>
      </div>
      <br />
      <button
        onClick={() => {
          addToString("§");
          addEmptyStyle();
        }}
      >
        Style
      </button>
    </>
  );
}

export default Keyboard;
