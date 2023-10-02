"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/icon-button";
import { RegexIcon, X } from "lucide-react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const [menuPhonebtn, setMenuPhonebtn] = useState(false);
  const onClose = () => setMenuPhonebtn(false);
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6  items-center  lg:space-x-16 ">
      <div className="flex justify-center items-center  md:hidden ">
        <Button
          onClick={() => setMenuPhonebtn(!menuPhonebtn)}
          className="text-sm px-4 py-2"
        >
          Menu
        </Button>
        {menuPhonebtn && (
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={onClose}
            open
          >
            {/* Background */}
            <div className="fixed inset-0 bg-black bg-opacity-25 " />
            <div className="fixed inset-0 z-40 flex">
              <Dialog.Panel
                className="relative ml-auto flex h-full w-[70%] max-w-xs flex-col overflow-auto
         bg-white py-4 pb-6 shadow-xl
         "
              >
                {/* Close Button  */}
                <div className="flex items-center justify-end px-4 ">
                  <IconButton
                    icon={<X size={15} />}
                    className="bg-red-500 text-white"
                    onClick={onClose}
                  />
                </div>
                {/* Render the route  */}
                <div className="p-4 mt-8 space-y-4">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        " flex text-2xl font-bold  transition-colors ",
                        route.active ? "text-black" : "text-neutral-500"
                      )}
                    >
                      {route?.label}
                    </Link>
                  ))}
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </div>

      <div className="hidden md:flex flex-row items-center  space-x-5">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              " flex text-sm font-medium transition-colors hover:text-[#111]",
              route.active ? "text-[#111]" : "text-neutral-400"
            )}
          >
            {route?.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MainNav;
