function Screen(props) {
  //   const keyboardString = props.keyboardString;
  const styles = [{ backgroundColor: "yellow" }, {}, {}]; //props.styles
  const keyboardString = "!lalala!ff!";

  const keyboardStringSplit = keyboardString.split("!");

  return (
    <>
      <p>
        {keyboardStringSplit.map((text, index) => {
          <span style={styles[index]}>{text}</span>;
        })}
      </p>
    </>
  );
}

export default Screen;
