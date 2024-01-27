"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Lightmode from "../lightmode/Lightmode";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = () => {
      if (window.innerWidth > 768 && isOpen == "true") {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", mediaQuery);

    mediaQuery();

    return () => window.removeEventListener("resize", mediaQuery);
  }, []);

  const showMenu = () => setIsOpen(!isOpen);

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
      <div onClick={showMenu} className="md:hidden flex fixed">
        <FaBars size={20} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ width: "0", fixed: true }}
            animate={{ width: "50%", fixed: true }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            exit={{ width: "0", fixed: true, top: 0, right: 0 }}
            className="h-full w-full md:hidden"
          >
            <ul className="pt-10 border-l border-l-gray-500 h-[100vh]">
              {pages.map((page) => (
                <li
                  className="ml-6 p-4 border-b border-b-gray-500"
                  key={page.name}
                >
                  <Link component="a" className="nav-items" href={page.path}>
                    {page.name}
                  </Link>
                </li>
              ))}
              <li className="ml-6 p-4">
                <Lightmode />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
