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
      <span className="text-red-500">
        {formatter.format(Number(value) + 50)}{" "}
      </span>
    </div>
  );
};

export default Currency;
