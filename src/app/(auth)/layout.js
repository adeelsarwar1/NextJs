"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./global.css"
const navLinks = [
  { name: "Resgister", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forget Password", href: "/forget-password" },
];
export default function AuthLayout({ children }) {
  const pathname = usePathname();
  const [input, setInput]= useState("")
  return (
    <>
    <div className="m-4">
      <input className="border border-black" value={input} onChange={e=> setInput(e.target.value)}/>
    </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link href={link.href} key={link.name} className={isActive ? "font-bold m-4 text-lg" : "text-blue-900 m-4 text-lg"}>
            {link.name}{" "}
          </Link>
        );
      })}
      <h2 className="text-4xl font-bold m-4 ">Inner Layout</h2>
      {children}
    </>
  );
}
