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

function StyleButtons({ updateStyle, addToString, addEmptyStyle }) {
  const stylePresets = {
    colors: ["grey", "red", "green", "blue"],
    sizes: [40, 55, 70, 100],
  };

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

  return (
    <>
      <div id="styleBtnsContainer">
        <button
          onClick={() => {
            addToString("§");
            addEmptyStyle();
          }}
        >
          Style
        </button>
        {generateButtons(colorEmojis, (index) => {
          updateStyle({ color: stylePresets.colors[index] });
        })}
        <br />
        {generateButtons(
          textSizeEmojis,
          (index) => {
            updateStyle({ fontSize: stylePresets.sizes[index] });
          },
          true
        )}
        <br />
        {/* {generateButtons(textDecorationEmojis)} */}
      </div>
    </>
  );
}

export default StyleButtons;
