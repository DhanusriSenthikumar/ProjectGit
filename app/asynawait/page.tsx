import React, { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
}
const page = () => {
  const [users, setUser] = useState<User[]>([]);
  useEffect(() => {
    async function asyncoperation() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUser(data);
        data.forEach((user: User) => {
          console.log(user.name);
        });
      } catch (error) {
        console.log(error);
      }
    }
    asyncoperation();
  }, []);
  return <>
  {users.map((user)=>{
    <h1 key={user.id}>{user.name}</h1>
  })}
  
  </>;
};

export default page;
