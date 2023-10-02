import { UserButton, auth } from "@clerk/nextjs";

import { UserCog } from "lucide-react";
import Link from "next/link";

const UserBtn = () => {
  const { userId } = auth();
  if (!userId) {
    return (
      <>
        <Link href="/sign-in">
          <UserCog size={20} />
        </Link>
      </>
    );
  } else {
    return (
      <>
        <UserButton afterSignOutUrl="/" />
        <Link href="/user" className="font-bold hover:text-gray-500">
          Profiel
        </Link>
      </>
    );
  }
};

export default UserBtn;
