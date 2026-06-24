import { useCounter } from "../hooks/use-counter";

function ProductCounter() {
  const { count, decrement, increment, reset } = useCounter(1);

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Prodcut Counter</h2>
      <p>Quantity Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default ProductCounter;
