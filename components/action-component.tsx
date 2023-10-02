import { UserCircle } from "lucide-react";
import Link from "next/link";
import { auth } from "@clerk/nextjs";

const ActionComponent = () => {
  const { userId } = auth();
  if (!userId) {
    return (
      <div className="mx-4 md:pl-12 pl-2 flex items-center justify-between bg-black text-white py-1 px-2 rounded-b-xl  ">
        <p className="text-sm ml-5 animate-pulse">
          Get 20% off with registration
        </p>
        <div className="mr-2 md:mr-24 animate-pulse ">
          <Link href="/sign-up">
            <UserCircle />
          </Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ActionComponent;
