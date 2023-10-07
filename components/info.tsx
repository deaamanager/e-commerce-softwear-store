"use client";
import { Eye, ShoppingCart, Star } from "lucide-react";
import { MouseEventHandler } from "react";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/Button";
import CountdownTimer from "@/components/ui/CountdownTimer";
import useCart from "@/hooks/use-cart";
import Image from "next/image";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 ">{data?.name}</h1>
      <div className="">
        <div className="my-2 flex items-center justify-center">
          <div className="  ">
            <Image
              width={40}
              height={40}
              src="https://cdn.sanity.io/images/7n5v8za3/production/85ba22cfb9a657e8f74c92bdaa6ea6e631e5a8df-260x280.png"
              //src="https://cdn.sanity.io/images/7n5v8za3/production/23a56edebcc36a7a8dfb80ca57d6da065f9fdfed-488x528.png"
              alt="budegt"
              className=" bg-blend-screen."
            />
          </div>
          <p className="text-[12px] md:text-sm text-start pl-2 pb-1 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            commodi maiores
          </p>
        </div>
      </div>
      <div className="ml-3 flex items-end justify-between ">
        <p className="text-2xl text-gray-900 ">
          <Currency value={data?.price} />
        </p>
      </div>
      <div className="flex items-center space-x-2 mt-4">
        <div className="flex items-center justify-center">
          <span>
            <Star size={20} className="text-yellow-500 mb-1 " />
          </span>
          <span className="text-gray-400 text-center font-bold text-sm">
            4.6
          </span>
        </div>
        <div className="flex items-center justify-center ">
          <span>
            <Eye size={20} className="text-[#111]  mb-1" />
          </span>
          <span className="text-gray-400 text-center font-bold text-sm">
            137
          </span>
        </div>
      </div>
      <hr className="mb-4" />
      <div className=" flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600 "
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
        <div className="flex flex-col items-start gap-y-3 ">
          <h3 className="font-semibold text-red-600 "> Endes in :</h3>
          <div className=" flex items-center justify-center w-full  md:items-start md:justify-start relative">
            <CountdownTimer />
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          className="flex items-center gap-x-2 rounded-2xl"
        >
          Add To Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
