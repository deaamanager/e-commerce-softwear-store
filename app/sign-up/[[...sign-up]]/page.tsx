import { SignUp } from "@clerk/nextjs";

const SingUpPage = () => {
  return (
    <div className="flex items-center justify-center my-12 md:my-24">
      <SignUp />
    </div>
  );
};

export default SingUpPage;
