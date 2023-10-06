"use client";
import { useEffect, useState } from "react";

const CardCountDownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      let target = new Date();

      if (
        now.getHours() === 23 &&
        now.getMinutes() === 59 &&
        now.getSeconds() === 59
      ) {
        target.setDate(now.getDate() + 1);
        target.setHours(0, 0, 0, 0);
      } else {
        target.setHours(23, 59, 59, 999);
      }

      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    };

    const interval = setInterval(updateCountdown, 1000);

    updateCountdown();

    return () => clearInterval(interval);
  }, []);
  return (
    <h3 className=" flex  items-end justify-end   text-white font-mono text-sm  font-medium space-x-[8px] ">
      <span className="relative w-7 h-7 rounded-full flex items-center justify-center">
        <span className="absolute w-full h-full border border-red-500  blur-sm rounded-full bg-red-500 antialiased" />
        <span className="text-white absolute animate-pulse ">{days}</span>
      </span>
      <span className="relative w-7 h-7 rounded-full flex items-center justify-center">
        <span className="absolute w-full h-full border border-red-500  blur-sm rounded-full bg-red-500 antialiased" />
        <span className="text-white absolute animate-pulse ">{hours} </span>
      </span>{" "}
      <span className="relative w-7 h-7 rounded-full flex items-center justify-center">
        <span className="absolute w-full h-full border border-red-500  blur-sm rounded-full bg-red-500 antialiased" />
        <span className="text-white absolute animate-pulse ">{minutes}</span>
      </span>{" "}
      <span className="relative w-7 h-7 rounded-full flex items-center justify-center">
        <span className="absolute w-full h-full border border-red-500  blur-sm rounded-full bg-red-500 antialiased" />
        <span className="text-white absolute animate-pulse ">{seconds}</span>
      </span>
    </h3>
  );
};

export default CardCountDownTimer;
