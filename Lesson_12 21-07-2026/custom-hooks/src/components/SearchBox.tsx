import { type ChangeEvent } from "react";
import { useTextLength } from "../hooks/use-text-length";

export function SearchBox() {
  const { text, setText, length } = useTextLength();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>Search</h2>

      <input type="text" value={text} onChange={handleChange} />

      <p>Search value: {text}</p>

      <p>Characters: {length}</p>
    </div>
  );
}
