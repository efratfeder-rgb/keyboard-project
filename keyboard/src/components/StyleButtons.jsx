// import { useState } from "react";

const colorEmojis = [
  "⚪", // white
  "🔴", // red
  "🟢", // green
  "🔵", // blue
];
const textSizeEmojis = [
  "🔹", // small
  "🔷", // medium
  "🔶", // large
  "🟥", // extra large
];
const textDecorationEmojis = [
  "🅱️", // bold
  "🄸", // italic
  "🆎", // underline
  "🔤", // plain / normal text
];

function StyleButtons({ updateStyle }) {
  const stylePresets = {
    colors: ["grey", "red", "green", "blue"],
    sizes: [80, 100, 120, 150],
  };

  const generateButtons = (arr, clickAction) => {
    return arr.map((item, index) => (
      <button
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
      {generateButtons(colorEmojis, (index) => {
        updateStyle({ color: stylePresets.colors[index] });
      })}
      <br />
      {generateButtons(textSizeEmojis, (index) => {
        updateStyle({ fontSize: stylePresets.sizes[index] });
      })}
      <br />
      {/* {generateButtons(textDecorationEmojis)} */}
    </>
  );
}

export default StyleButtons;
