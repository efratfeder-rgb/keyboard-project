import Text from "./Text";

function Screen({ styles, keyboardString }) {
  return (
    <>
      <p style={{ fontSize: 100 }}>
        <Text keyboardString={keyboardString} styles={styles} />
      </p>
    </>
  );
}

export default Screen;
