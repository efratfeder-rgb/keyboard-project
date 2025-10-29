import Text from "./Text";

function Screen(props) {
  const styles = [{ backgroundColor: "Yellow" }, {}, {}]; //props.styles
  const keyboardString = props.keyboardString; //"§lalala§ ff"; //props.keyboardString

  return (
    <>
      <p style={{ fontSize: 100 }}>
        <Text keyboardString={keyboardString} styles={styles} />
      </p>
    </>
  );
}

export default Screen;
