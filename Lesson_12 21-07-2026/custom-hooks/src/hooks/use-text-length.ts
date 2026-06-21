import { useState } from "react";

export function useTextLength(initialValue: string = "") {
  const [text, setText] = useState<string>(initialValue);

  const length = text.length;

  return {
    text,
    setText,
    length,
  };
}
