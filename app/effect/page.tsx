"use client"
import { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
}
export default function Effect() {
  const [users, setUser] = useState<User[]>([]);
  const[text,setText]=useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <>
      {users.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
      <input type="text" onChange={(e)=>setText(e.target.value)} />
      <p>{text}</p>
    </>
  );
}
