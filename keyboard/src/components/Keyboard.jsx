import { useState } from "react";
function Keyboard(props) {
  const [language, setLanguage] = useState("hebrew");
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
  const addNumbers = () => {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    return numbers.map((num, index) => <button key={index}>{num}</button>);
  };
  const generateButtons = (arr) => {
    return arr.map((item, index) => <button key={index}>{item}</button>);
  };
  const addEmojis = () => {
    return emojis.map((emoji, index) => <button key={index}>{emoji}</button>);
  };

  return (
    <>
      <button>⌫</button>
      <button>🗑️</button>
      {addNumbers()}
      {<br />}
      {language === "hebrew" && generateButtons(hebrew)}
      {language === "english" && generateButtons(english)}
      {language === "emojis" && addEmojis()}
      <div>
        <button onClick={() => setLanguage("hebrew")}>עברית</button>
        <button onClick={() => setLanguage("english")}>English</button>
        <button onClick={() => setLanguage("emojis")}>אימוג'ים</button>
      </div>
    </>
  );
}
export default Keyboard;
