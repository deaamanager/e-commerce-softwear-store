"use client";

import { ShoppingBag, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

import Button from "@/components/ui/Button";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto mr-2 flex items-center gap-x-4. relative group">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-xl bg-black px-2 py-2"
      >
        <ShoppingCart size={20} color="white" />
      </Button>
      <span className=" text-sm font-medium absolute -top-2 -right-1 group-hover:scale-[1.16] duration-500 ease-in-out transition text-white text-center bg-red-500 rounded-full w-5 h-5">
        {cart?.items?.length}
      </span>
    </div>
  );
};

export default NavbarActions;
