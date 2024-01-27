"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Lightmode from "../lightmode/Lightmode";

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
    <div className="max-w-full flex h-[5rem] items-center justify-between px-10">
      <ul className="flex flex-row gap-5">
        {pages.map((page) => (
          <li>
            <Link
              component="a"
              className="nav-items"
              key={page.name}
              href={page.path}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
      <Lightmode />
    </div>
  );
}
