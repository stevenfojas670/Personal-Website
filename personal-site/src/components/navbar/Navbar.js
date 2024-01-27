"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Experience",
    path: "/experience",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Hobbies",
    path: "/hobbies",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  return (
    <div className="container h-[4rem] flex items-center justify-center absolute"></div>
  );
}
