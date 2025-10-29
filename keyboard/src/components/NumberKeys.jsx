function NumberKeys({ numberArray, addToString }) {
  return (
    <>
      {numberArray.map((num, index) => (
        <button onClick={() => addToString(num)} key={index}>
          {num}
        </button>
      ))}
    </>
  );
}

export default NumberKeys;
