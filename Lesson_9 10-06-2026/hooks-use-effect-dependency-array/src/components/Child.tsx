import type { Dispatch, SetStateAction } from "react";

interface ChildProps {
  changeCount: Dispatch<SetStateAction<number>>;
}

function Child(props: ChildProps) {
  const { changeCount } = props;
  return (
    <div style={{ border: "1px solid red", width: 200, padding: 20 }}>
      <h2>Hello From Child</h2>
      <button onClick={() => changeCount((prev) => prev + 1)}>
        Click To Change Father Counter
      </button>
      <button onClick={() => changeCount(0)}>
        Click To Reset Father Counter
      </button>
    </div>
  );
}

export default Child;
