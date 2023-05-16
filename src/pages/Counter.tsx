import "./shared.css";
import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [inputCount, setInputCount] = useState<string>("");
  const [isCountLoaded, setIsCountLoaded] = useState<boolean>(false);

  // Update local storage whenever count changes
  useEffect(() => {
    localStorage.setItem("count", String(count));
  }, [count]);

  // Retrieve count from local storage on component mount
  useEffect(() => {
    const storedCount = localStorage.getItem("count");
    if (storedCount !== null) {
      setCount(Number(storedCount));
      setIsCountLoaded(true);
    }
  }, []);

  const handleCounter = (action: string) => {
    switch (action) {
      case "increment":
        setCount(count + 1);
        break;
      case "decrement":
        setCount(count - 1);
        break;
      case "reset":
        setCount(0);
        break;
      case "custom":
        const parsedInput = Number(inputCount);
        if (!isNaN(parsedInput)) {
          setCount(count + parsedInput);
        }
        setInputCount("");
        break;
    }
  };

  if (!isCountLoaded) {
    // You can display a loading indicator or placeholder while the count is being retrieved
    return <div>Loading...</div>;
  }

  return (
    <div className="main">
      <h1 className="counter-heading">Counter</h1>
      <div className="content">
        <h2 className="current-count">Current Count: {count}</h2>
        <button
          onClick={() => handleCounter("increment")}
          className="btn btn-success"
        >
          +
        </button>
        <button
          onClick={() => handleCounter("decrement")}
          className="btn btn-danger"
        >
          -
        </button>
        <input
          value={inputCount}
          onChange={(e) => setInputCount(e.target.value)}
          type="text"
          placeholder="Enter Custom Number"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleCounter("custom");
            }
          }}
        />
      </div>
      <div className="content">
        <button
          onClick={() => handleCounter("reset")}
          className="btn btn-warning mt-4"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
