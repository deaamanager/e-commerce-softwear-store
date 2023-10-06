import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";

import UserBtn from "@/components/user-btn";
import ActionComponent from "@/components/action-component";
import Carousel from "@/components/ui/Carousel";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <ActionComponent />

        <div className="border-b py-1 flex items-center justify-center overflow-hidden ">
          <Carousel />
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center ">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>

          <MainNav data={categories} />

          <NavbarActions />
          <div className=" flex items-center space-x-3">
            <UserBtn />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
