import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p>This is a simple home page.</p>
      <Button className="bg-blue-500 text-white">Click Me</Button>
      <UserButton />
    </div>
  );
}
