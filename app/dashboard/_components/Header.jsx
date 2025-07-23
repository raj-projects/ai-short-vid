import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="p-3 px-5 flex justify-between items-center shadow-md">
      <div className="flex gap-3 items-center">
        <Image src={"/logo.png"} alt="Logo" width={30} height={30} />
        <h1 className="font-bold">Creatify</h1>
      </div>
      <div className="flex gap-3 items-center">
        <Button>Dashboard</Button>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
