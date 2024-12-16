
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Loading() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Dream", "Build", "Launch"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 200);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="flex bg-blue-600 justify-center items-center text-center h-screen">
      <Image
        src="https://res.cloudinary.com/dnw1mcx2h/image/upload/v1733032954/zmxrya6bgxdiw7brhk59.png"
        alt="entrepreneurship"
        width={20}
        height={20}
        className=""
      />
      <span className="text-black text-6xl ml-4">{texts[textIndex]}</span>
    </div>
  );
}
