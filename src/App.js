function Incrementer() {
  const [number, setNumber] = React.useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h1>Number Incrementer</h1>
      <p>{number}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Incrementer;