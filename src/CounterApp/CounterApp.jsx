import { useState, useEffect } from "react";
import "./counterApp.css"

const CounterLogic = (count) => {
  const { value } = count;
  console.log(value);

  return (
    <div className="counterComponent">
      <h1>COUNTER</h1>
      <p>{value}</p>
    </div>
  );
};

const Counter = () => {
  const initalCountValue = 0;
  const [count, setCount] = useState(initalCountValue);

  const btnEventhandlerIncrement = () => {
    setCount(count + 1);
  };
  const btnEventhandlerDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="contanier">
      <CounterLogic value={count} />
      <div className="contanier2">
        <button onClick={btnEventhandlerIncrement}>Increment</button>
        <button onClick={btnEventhandlerDecrement}>Decrement</button>
      </div>

    </div>
  );
};

const App = () => {
  return (
    <div className = "main-Contanier">
      <Counter />
    </div>
  );
};

export default App;
