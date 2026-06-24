import { useCounter } from "../hooks/use-counter";

function LikesCounter() {
  const { count, increment } = useCounter(0);

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Likes Counter</h2>
      <p>Likse Count: {count}</p>
      <button onClick={increment}>Add like</button>
    </div>
  );
}

export default LikesCounter;
