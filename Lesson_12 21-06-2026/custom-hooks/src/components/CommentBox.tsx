import { useTextLength } from "../hooks/use-text-length";

export function CommentBox() {
  const { text, setText, length } = useTextLength();

  return (
    <div>
      <h2>Comment</h2>

      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <p>{text}</p>

      <p>Characters: {length}</p>
    </div>
  );
}
