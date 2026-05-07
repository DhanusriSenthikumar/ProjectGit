"use client";

import { useRef, useState } from "react";

export default function refusage() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(0);
  const refstoringvariable = useRef(0);
  const refusageinputaccess = useRef<HTMLInputElement>(null);
  return (
    <>
      <h1>{count}</h1>
      <h1>{refstoringvariable.current}</h1>
      <button
        onClick={() => {
          refstoringvariable.current++;

          setCount(count + 1);
        }}
      >Storing value</button>
      <input ref={refusageinputaccess} />
      <h1>{user}</h1>
      <button
        onClick={() => {
          console.log(refusageinputaccess.current?.value);

          setUser(user + 1);
        }}
      >Accesing input</button>
    </>
  );
}
