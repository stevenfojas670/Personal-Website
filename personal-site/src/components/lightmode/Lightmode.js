"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Lightmode() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleMode = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button className="lightmode-button" onClick={toggleMode}>
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}
