"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Lightmode from "../lightmode/Lightmode";
import { FaBars } from "react-icons/fa";

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
  const [menuShow, setMenuShow] = useState(false);

  const showMenu = () => {
    setMenuShow(!menuShow);
  };

  return (
    <div className="max-w-2xl mx-auto flex items-center justify-end h-[6rem] px-4">
      <ul className="hidden justify-center items-center md:flex">
        {pages.map((page) => (
          <li className="p-4" key={page.name}>
            <Link component="a" className="nav-items" href={page.path}>
              {page.name}
            </Link>
          </li>
        ))}
        <li className="p-4">
          <Lightmode />
        </li>
      </ul>
      <div onClick={showMenu} className="flex md:hidden">
        <FaBars size={20} />
      </div>
      <div
        className={
          !menuShow
            ? "fixed right-0 top-0 w-[50%] h-full border-l border-r-gray-700 bg-neutral-200 dark:bg-black duration-1000"
            : "fixed top-0 right-[-100%] h-full border-l border-r-gray-700 bg-neutral-200 dark:bg-black duration-1000"
        }
      >
        <ul className="flex  flex-col uppercase pt-5 border-l border-l-gray-700">
          <li className="p-4 mx-5 self-end" onClick={showMenu}>
            <FaBars size={20} />
          </li>
          {pages.map((page) => (
            <li className="p-4 mx-5 border-b-gray-700 border-b" key={page.name}>
              <Link component="a" className="nav-items" href={page.path}>
                {page.name}
              </Link>
            </li>
          ))}
          <li className="p-4 mx-5 border-b-gray-700 border-b">
            <Lightmode />
          </li>
        </ul>
      </div>
    </div>
  );
}
