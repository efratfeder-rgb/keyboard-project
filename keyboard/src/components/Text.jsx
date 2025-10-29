function Text(props) {
  const keyboardString = props.keyboardString;
  const styles = props.styles;

  const keyboardArr = keyboardString.split("§").filter((item) => item !== "");

  return (
    <>
      {keyboardArr.map((text, index) => (
        <span key={index} style={styles[index]}>
          {text}
        </span>
      ))}
    </>
  );
}

export default Text;
