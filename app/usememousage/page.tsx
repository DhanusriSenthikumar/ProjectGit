"use client";
import { useMemo, useState } from "react";

export default function Usememousage() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(6);

  const memoCal = useMemo(() => {
    console.log("...calculation");
    return num * num;
  }, [num]);
  return (
    <>
      <h1>{memoCal}</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Usememo recalculate
      </button>
    </>
  );
}
