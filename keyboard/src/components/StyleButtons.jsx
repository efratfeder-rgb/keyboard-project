import "../App.css";

const colorEmojis = [
  "⚪", // white
  "🔴", // red
  "🟢", // green
  "🔵", // blue
];
const textSizeEmojis = [
  "🔷", // small
  "🔷", // medium
  "🔷", // large
  "🔷", // extra large
];
const textDecorationEmojis = [
  "🅱️", // bold
  "🄸", // italic
  "🆎", // underline
  "🔤", // plain / normal text
];
const stylePresets = {
  colors: ["grey", "red", "green", "blue"],
  sizes: [40, 55, 70, 100],
};

function StyleButtons({
  updateStyle,
  addToString,
  addEmptyStyle,
  clearStyles,
}) {
  const generateButtons = (arr, clickAction, doesScaleSize = false) => {
    return arr.map((item, index) => (
      <button
        style={doesScaleSize ? { fontSize: 12 + index * 3 } : {}}
        key={index}
        onClick={() => {
          clickAction(index);
        }}
      >
        {item}
      </button>
    ));
  };

  const updateSize = (index) => {
    updateStyle({ fontSize: stylePresets.sizes[index] });
  };

  const updateColor = (index) => {
    updateStyle({ color: stylePresets.colors[index] });
  };

  const addStyle = () => {
    addToString("§");
    addEmptyStyle();
  };

  return (
    <>
      <div id="styleBtnsContainer">
        <button onClick={addStyle}>Style</button>

        {generateButtons(colorEmojis, updateColor)}

        <br />

        <button onClick={clearStyles}>style all</button>

        {generateButtons(textSizeEmojis, updateSize, true)}

        <br />
        {/* {generateButtons(textDecorationEmojis)} */}
      </div>
    </>
  );
}

export default StyleButtons;
