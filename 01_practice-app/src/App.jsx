import "./App.css";
import { useState } from "react";
import Box from "./component/box";

function App() {
  const [count, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(count + 1)}>Click: {count}</button>
    </div>
  );
}

export default App;
