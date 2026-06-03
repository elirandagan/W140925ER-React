import { useState } from "react";
import "./App.css";
import UserProfile from "./UserProfile";

function App() {
  const [count, setCount] = useState<number>(0);
  // let count: number = 0;
  const [text, setText] = useState<string>("Hello User!");
  // let text: string = "Hello User!"
  function increament() {
    console.log("Before increament");
    // count = count + 1;
    setCount(count + 1);
    // count = count + 1;
    console.log("After increament");
  }

  function decrease() {
    console.log("Before decrease");
    setCount(count - 1);
    // setCount((prev) => prev - 1);
    // count = count - 1;
    console.log("After decrease");
  }

  function changeText() {
    setText("Goodbye User!");
    // text = "Goodbye User!"
  }

  return (
    <>
      <UserProfile />
      <hr />
      <hr />
      <hr />
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: 28 }}>Count: {count}</p>
          <button
            style={{
              width: "fit-content",
              fontSize: 20,
              borderRadius: 12,
              padding: 8,
              background: "green",
            }}
            onClick={increament}
          >
            Increament
          </button>
          <button
            style={{
              width: "fit-content",
              fontSize: 20,
              borderRadius: 12,
              padding: 8,
              background: "tomato",
            }}
            onClick={decrease}
          >
            Decrease
          </button>
        </div>
        <hr />
        <hr />
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: 28 }}>{text}</p>
          <button
            style={{
              width: "fit-content",
              fontSize: 20,
              borderRadius: 12,
              padding: 8,
              background: "gray",
            }}
            onClick={changeText}
          >
            Change Text
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
