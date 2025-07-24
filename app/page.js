import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2>Welcome to the Creatify!</h2>
      <Link href="/dashboard/create-new">
        <Button className="bg-blue-500 text-white">Create Account</Button>
      </Link>
      <UserButton />
    </div>
  );
}
