/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

const UseEffectWithDependencies = () => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    // Mounting
    console.log("Mounted");

    // Unmounting
    return () => {
      console.log("Unmounted");
    };
  });

  useEffect(() => {
    // Mounting
    if (counter === 10) {
      setCounter(0);
    }
    if (counter % 2 === 0) {
      console.log(`Counter value is: ${counter}  is even`);
    } else {
      console.log(`Counter value is: ${counter}  is odd`);
    }
  }, [counter]);

  return (
    <div>
      <button
        style={{
          fontSize: 24,
          borderRadius: 8,
          padding: 8,
          background: "tomato",
          width: "fit-content",
        }}
        onClick={() => setCounter((prev) => prev + 1)}
      >
        {counter}
      </button>
    </div>
  );
};

export default UseEffectWithDependencies;
