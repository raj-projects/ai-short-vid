import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen bg-image-[url('./assets/img/bg-login.webp')] bg-cover bg-center">
      <SignUp />
    </div>
  );
}
