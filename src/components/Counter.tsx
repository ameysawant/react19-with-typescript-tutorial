import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>React + TypeScript</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

export default Counter;
