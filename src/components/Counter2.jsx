import { useEffect, useState } from "react";
import '../index.css'

export default function Counter2() {
  return (
    <div className="app">
      <h1 className="title">Counter2 App</h1>
      <div className="counter">
        <button >-</button>
        <span>0</span>
        <button>+</button>
      </div>
    </div>
  );
}

