import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Header() {
  return (
    <div className="p-3 px-5 flex justify-between items-center shadow-md">
      <div className="flex gap-3 items-center">
        <Image src={"/assets/img/globe.svg"} alt="Logo" width={20} height={20} />
        <h1 className="font-bold">Creatify</h1>
      </div>
      <div className="flex gap-3 items-center">
        <Link href={"/dashboard"}>
          <Button className={"cursor-pointer"}>Dashboard</Button>
        </Link>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
