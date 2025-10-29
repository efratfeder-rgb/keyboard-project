function Text({ keyboardString, styles }) {
  const keyboardArr = keyboardString.split("§").filter((item) => item !== "");

  return (
    <>
      {keyboardArr.map((text, index) => (
        <span key={index} style={styles[index]}>
          {text}
        </span>
      ))}
      {(keyboardString[keyboardString.length - 1] === "§" ||
        keyboardString[keyboardString.length - 1] === " ") && (
        <span style={styles[styles.length - 1]}>_</span>
      )}
    </>
  );
}

export default Text;
