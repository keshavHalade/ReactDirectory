import "./App.css";
import React, { useState } from "react";

function App() {
  const [step, setStep] = useState(1); // Step increment/decrement value
  const [count, setCount] = useState(0); // Count for days adjustment
  let date = new Date("Dec 18 2024"); // Base date

  return (
    <div className="App">
      {/* Step controls */}
      <div className="buttons">
        <button onClick={() => setStep(step + 1)}> + </button>
        <p> Step : {step} </p>
        <button onClick={() => setStep(Math.max(1, step - 1))}> - </button>
      </div>

      {/* Count controls */}
      <div className="buttons">
        <button onClick={() => setCount(count + step)}> + </button>
        <p> Count : {count} </p>
        <button onClick={() => setCount(count - step)}> - </button>
      </div>

      {/* Date display */}
      <p className="para">
        {count === 0
          ? "Today is "
          : count < 0
          ? `${Math.abs(count)} days ago was `
          : `${count} days from today is `}
        <span>
          {new Date(
            date.getTime() + count * 24 * 60 * 60 * 1000
          ).toDateString()}
        </span>
      </p>
    </div>
  );
}

export default App;
