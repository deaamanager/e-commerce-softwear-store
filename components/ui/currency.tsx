"use client";

import { useState, useEffect } from "react";

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div className="font-semibold space-x-3">
      <span>{formatter.format(Number(value))}</span>
      <span className="text-red-500 relative overflow-hidden ">
        <span className="absolute w-[120%]  h-[2px] bg-red-500    -right-2 top-3 rounded-full  " />
        <span>{formatter.format(Number(value) + 50)} </span>
      </span>
    </div>
  );
};

export default Currency;
