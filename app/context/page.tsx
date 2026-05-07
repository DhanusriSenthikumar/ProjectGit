"use client"
import { createContext, useState } from "react";

export const userContext = createContext<any>(null);

export default function Userprovider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState("dhanu");
  return (
    <>
      <userContext.Provider value={{ user, setUser }}>
        {children}
      </userContext.Provider>
    </>
  );
}
