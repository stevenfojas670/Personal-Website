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
    <div className="w-full justify-end md:justify-center items-center fixed mx-auto flex h-[6rem] px-4">
      <ul className="hidden justify-center items-center md:flex">
        {pages.map((page) => (
          <motion.li
            whileHover={{ scale: 1.2, opacity: 0.8 }}
            className="p-4"
            key={page.name}
          >
            <Link className="nav-items" href={page.path}>
              {page.name}
            </Link>
          </motion.li>
        ))}
        <motion.li whileHover={{ scale: 1.2, opacity: 0.8 }} className="p-4">
          <Lightmode />
        </motion.li>
      </ul>
      <div onClick={showMenu} className="md:hidden fixed z-[100]">
        <FaBars size={20} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ width: "0", sticky: true }}
            animate={{ width: "50%", sticky: true }}
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
