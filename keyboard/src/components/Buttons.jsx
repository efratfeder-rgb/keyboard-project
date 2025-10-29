function Buttons({ language, addToString }) {
  return language.map((item, index) => (
    <button onClick={() => addToString(item)} key={index}>
      {item}
    </button>
  ));
}

export default Buttons;
