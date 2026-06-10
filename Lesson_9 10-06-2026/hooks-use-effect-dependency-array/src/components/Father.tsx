import { useState } from "react";
import Child from "./Child";

function Father() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div style={{ border: "1px solid gray", width: 300, padding: 20 }}>
      <h2>Hello From Father</h2>
      <p>The Counter Is:{counter}</p>
      <Child changeCount={setCounter} />
    </div>
  );
}

export default Father;
