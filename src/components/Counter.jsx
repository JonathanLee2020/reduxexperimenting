import { useEffect, useState } from "react";
import '../index.css'

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment () {
    setCount(count + 1);
  }

  function decrement () {
    setCount(count - 1)
  }
  return (
    <div className="app">
      <h1 className="title">Counter App</h1>
      <div className="counter">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

