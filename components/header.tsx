"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  //   useEffect(() => {
  //     const onScroll = () => {
  //       setScrolled(window.scrollY > 10);
  //     };
  //     window.addEventListener("scroll", onScroll);
  //     return () => window.removeEventListener("scroll", onScroll);
  //   }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled ? "backdrop-blur-md bg-white/70 shadow-sm" : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left Name */}
        <h1 className="text-2xl font-newsreader italic font-light">
          Ritik Chhipa
        </h1>

        {/* Right Menu Icon */}
        <button className="p-2 rounded-full bg-black/5 transition">
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}
