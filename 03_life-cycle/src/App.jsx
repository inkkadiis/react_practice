import "./App.css";
import { useState, useEffect } from "react";
import { Timer } from "./Timer";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);
  const [showTimer, setShowTimer] = useState(true);

  const handleClick = () => {
    setCount((num) => num + 1);
    setValue((num) => num + 1);
  };

  useEffect(() => {
    console.log("start!");
  }, []);

  useEffect(() => {
    console.log("updated");
  }, [count, value]);
  return (
    <div>
      {console.log("landering")}
      <h1>{count}</h1>
      <h2>Value:{value}</h2>
      <button onClick={handleClick}>counting</button>
      <button onClick={() => setShowTimer((num) => !num)}>stop timer</button>
      {showTimer && <Timer />}
    </div>
  );
}

export default App;
