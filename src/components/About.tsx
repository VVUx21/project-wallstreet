"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

function CountUp({
  end,
  trigger,
  suffix = "",
}: {
  end: number;
  trigger: boolean;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    setCount(0); 
    let current = 0;
    const increment = Math.ceil(end / 50); 
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end); 
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30); // Adjust animation speed here

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [end, trigger]);

  return (
    <span className="text-xl md:text-4xl text-white">
      {count.toLocaleString() + suffix}
    </span>
  );
}

function About() {
  const [triggerCount, setTriggerCount] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTriggerCount(true); // Trigger animation
          } 
          // else {
          //   setTriggerCount(false); // Reset to ensure re-trigger
          // }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div id="About" ref={aboutRef} className="bg-black">
      <div className="text-[#0064E0] text-6xl font-poppins flex justify-center p-10 font-bold">About Us</div>
      <div className="p-8 font-[poppins] text-xl flex justify-center text-white lg:text-center">
        Entrepreneurship Cell, NIT Rourkela, established in 2007 under the Technical Society of SAC, aims to foster innovation, incubation, and entrepreneurship among students. It promotes entrepreneurial traits and supports budding entrepreneurs in achieving their goals. Key initiatives include the National Entrepreneurship Summit, Arthayan, and year-round weekend activities. These events encourage an entrepreneurial culture and assist students in pursuing their ventures. ECell strives to nurture talents and empower future entrepreneurs.
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-10 text-center">
        <div className="p-4 flex flex-col justify-between h-full">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="https://res.cloudinary.com/dnw1mcx2h/image/upload/v1733031788/vxpelexapiilpx2ea2dt.png"
              alt="students"
              width={200}
              height={200}
              className="mx-auto"
            />
            <CountUp end={8000} trigger={triggerCount} suffix="+" />
          </div>
          <span className="block text-[#0064E0] sm:text-4xl text-xl md:text-4xl mt-4 font-bold">STUDENTS</span>
        </div>
        <div className="p-4 flex flex-col justify-between h-full">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="https://res.cloudinary.com/dnw1mcx2h/image/upload/v1733031829/ejgkbujnve7ucg71pjtn.png"
              alt="entrepreneurship"
              width={200}
              height={200}
              className="mx-auto"
            />
            <CountUp end={50} trigger={triggerCount} suffix="+" />
          </div>
          <span className="block text-[#0064E0] sm:text-4xl text-xl md:text-4xl mt-4 font-bold">SPEAKERS</span>
        </div>
        <div className="p-4 flex flex-col justify-between h-full">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="https://res.cloudinary.com/dnw1mcx2h/image/upload/v1733031850/c8zubzp0auwolg1sbpzm.png"
              alt="entrepreneurship"
              width={200}
              height={200}
              className="mx-auto"
            />
            <CountUp end={150} trigger={triggerCount} suffix="+" />
          </div>
          <span className="block text-[#0064E0] sm:text-4xl text-xl md:text-4xl mt-4 font-bold">STARTUPS</span>
        </div>
        <div className="p-4 flex flex-col justify-between h-full">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="https://res.cloudinary.com/dnw1mcx2h/image/upload/v1733031866/wkd5g56ao9mewqhhqg2n.png"
              alt="entrepreneurship"
              width={200}
              height={200}
              className="mx-auto"
            />
            <CountUp end={100} trigger={triggerCount} suffix="+"/>
          <span className="block text-[#0064E0] sm:text-4xl text-xl md:text-4xl mt-4 font-bold">INVESTORS</span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;