import React, { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setTrailing({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "A" ||
        e.target.closest("button") ||
        e.target.closest("a") ||
        e.target.getAttribute("role") === "button"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Hide on touch screen devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Inner precise dot */}
      <div
        className={`fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-50 transition-transform duration-75 -translate-x-1/2 -translate-y-1/2 ${
          isClicked ? "scale-50 bg-purple-500" : isHovered ? "scale-150 bg-cyan-300" : ""
        }`}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      {/* Outer ambient aura ring */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-40 border border-cyan-500/40 transition-all duration-300 -translate-x-1/2 -translate-y-1/2 ${
          isHovered
            ? "w-12 h-12 bg-cyan-500/10 border-cyan-400 border-2 scale-110"
            : "w-8 h-8 bg-transparent"
        }`}
        style={{ transform: `translate3d(${trailing.x}px, ${trailing.y}px, 0)` }}
      />
    </>
  );
};
