function Text({ keyboardString, styles }) {
  const keyboardArr = keyboardString.split("§").filter((item) => item !== "");

  const showUnderscore =
    keyboardString[keyboardString.length - 1] === "§" ||
    keyboardString[keyboardString.length - 1] === " ";

  return (
    <>
      {keyboardArr.map((text, index) => (
        <span key={index} style={styles[index]}>
          {text}
        </span>
      ))}
      {showUnderscore && <span style={styles[styles.length - 1]}>_</span>}
    </>
  );
}

export default Text;
