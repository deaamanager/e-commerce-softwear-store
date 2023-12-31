"use client";

import Image from "next/image";
import { Tab } from "@headlessui/react";

import { Image as ImageType } from "@/types";
import GallaeryTab from "@/components/gallery/gallery-tab";
interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <>
      <div className="flex md:hidden">there is 3d solder phone</div>
      <Tab.Group
        as="div"
        className=" md:flex-col-reverse  hidden  sticky top-0  md:flex"
      >
        <div
          className="mx-auto mt-6  hidden w-full max-w-2xl sm:block
        lg:max-w-none
        "
        >
          <Tab.List className="grid grid-cols-4 gap-6">
            {images?.map((imge) => (
              <GallaeryTab key={imge.id} image={imge} />
            ))}
          </Tab.List>
        </div>
        <Tab.Panels className=" aspect-square w-full">
          {images?.map((image) => (
            <Tab.Panel key={image.id}>
              <div
                className=" aspect-square relative h-full w-full sm:rounded-lg
            overflow-hidden 
            "
              >
                <Image
                  fill
                  src={image.url}
                  alt="Image"
                  className="object-cover object-center "
                />
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default Gallery;
