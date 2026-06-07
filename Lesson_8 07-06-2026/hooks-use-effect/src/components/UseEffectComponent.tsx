import { useState } from "react";
import MountedComponent from "./MountedComponent";

function UseEffectComponent() {
  const [show, setShow] = useState<boolean>(true);

  return (
    <>
      {show && <MountedComponent />}
      <button
        style={{
          fontSize: 24,
          borderRadius: 8,
          padding: 8,
          background: "tomato",
          width: "fit-content",
        }}
        onClick={() => setShow((prev) => !prev)}
      >
        Try it!
      </button>
    </>
  );
}

export default UseEffectComponent;
