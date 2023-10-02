import { currentUser } from "@clerk/nextjs";
import Container from "@/components/ui/container";
import Image from "next/image";

const UserPage = async () => {
  const user = await currentUser();

  return (
    <div className="border-b">
      <Container>
        <div className="flex flex-col md:flex-row items-center">
          <div className="h-32 w-32 relative top-0 left-0  m-12">
            <Image
              src={`${user?.imageUrl}`}
              alt="image"
              fill
              className=" object-cover object-center rounded-full "
            />
          </div>
          <div>
            <h1>
              {user?.firstName} {user?.lastName}{" "}
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UserPage;
