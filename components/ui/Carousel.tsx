"use client";
import { useEffect, useState } from "react";
import SwiperCore from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { PhoneCall, ShieldCheck, Truck } from "lucide-react";

import "swiper/css";

//SwiperCore.use([Autoplay]);
SwiperCore.use([Autoplay]);
const headings = [
  {
    icon: <Truck />,
    text: "Free Shipping",
  },
  {
    icon: <ShieldCheck />,
    text: "14 Tage rückware ",
  },
  {
    icon: <PhoneCall />,
    text: "24/7 Servic contact",
  },
];

function Carousel() {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  useEffect(() => {
    if (swiper) {
      swiper?.autoplay?.start();
    }
  }, [swiper]);

  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Autoplay]}
        onScroll={setSwiper}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        onSwiper={setSwiper}
      >
        {headings.map((heading, index) => (
          <SwiperSlide virtualIndex={index} key={index}>
            <h1 className="flex items-center justify-center space-x-2">
              <span className="font-bold text-sm">{heading?.icon}</span>
              <span className="text-sm font-bold text-center">
                {heading?.text}
              </span>
            </h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
