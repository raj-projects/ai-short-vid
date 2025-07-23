import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const EmpityState = () => {
  return (
    <div className="p-5 py-24 flex items-center gap-3 flex-col mt-10 border border-dashed">
      <h2>You don't have any short video created</h2>
      <Link href={"/dashboard/create-new"}>
        <Button className={"cursor-pointer"}>Create new Short Video</Button>
      </Link>
    </div>
  );
};

export default EmpityState;
