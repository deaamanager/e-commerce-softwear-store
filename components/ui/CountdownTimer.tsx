"use client";

import { useEffect, useState } from "react";

const CountdownTimer = () => {
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
    <h1 className="flex items-center  relative top-1 justify-center gap-4 px-5 font-mono font-semibold md:pl-8">
      {/*<div className="absolute w-full h-full border-2 border-red-500 z-0 blur" /> */}
      <div className="text-center ">
        <h1 className="bg-black text-white mb-1 rounded-lg md:px-1 md:py-1">
          Day
        </h1>
        <span className=" bg-black text-white  rounded-full py-1 px-1 text-xl h-10 w-10  flex items-center justify-center  ">
          {days}
        </span>
      </div>
      <div className="text-center ">
        <h1 className="bg-black text-white mb-1 rounded-lg md:px-1 md:py-1">
          Hour
        </h1>
        <span className="bg-black text-white rounded-full py-1 px-1 text-xl h-10 w-10  flex items-center justify-center  ">
          {hours}
        </span>
      </div>
      <div className="text-center ">
        <h1 className="bg-black text-white mb-1 rounded-lg md:px-1 md:py-1">
          Min
        </h1>
        <span className="bg-black text-white rounded-full py-1 px-1 text-xl h-10 w-10  flex items-center justify-center">
          {minutes}
        </span>
      </div>
      <div className="text-center ">
        <h1 className="bg-black text-white mb-1 rounded-lg md:px-1 md:py-1">
          Scd
        </h1>
        <span className="bg-black text-white rounded-full py-1 px-1 text-xl h-10 w-10  flex items-center justify-center">
          {seconds}
        </span>
      </div>
    </h1>
  );
};

export default CountdownTimer;
