"use client";
import { useContext } from "react";
import { userContext } from "../context/page";

export default function Contextuseage() {
  const { user, setUser } = useContext(userContext);
  return (
    <>
      <h1>{user}</h1>
      <button onClick={()=>setUser("sujay")}>Click here</button>
    </>
  );
}
