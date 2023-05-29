import { useState } from "react";

export default function Textip() {
  const [text, setText] = useState("");

  return (
    <div>
      <form>
        <div>String:</div>
        <input
          type="text"
          strng="strng"
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <br />
        <div>Number:</div>
        <input type="text" strng="number" />
        <br />
        <br />
        <button>Clear</button>
        <p>Input: {text}</p>
      </form>
    </div>
  );
}
