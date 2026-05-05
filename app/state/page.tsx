"use client";
import { useState } from "react";

interface ChildProps {
  name: string;
}
function Child({ name }: ChildProps ) {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
}

export default function State() {
  return <Child name="dhanu" />;
}
