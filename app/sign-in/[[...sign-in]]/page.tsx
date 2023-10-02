import { SignIn } from "@clerk/nextjs";

const SingInPage = () => {
  return (
    <div className="flex items-center justify-center my-24">
      <SignIn />
    </div>
  );
};

export default SingInPage;
