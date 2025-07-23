"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import EmpityState from "./_components/EmpityState";
import Link from "next/link";

function Dashboard() {
  const [videoList, setVideoList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl text-primary">Dashboard</h2>
        <Link href={"/dashboard/create-new"}>
          <Button className={"cursor-pointer"}>+ Create New</Button>
        </Link>
      </div>

      {/* Empity state */}
      {videoList?.length === 0 && (
        <div>
          <EmpityState />
        </div>
      )}
    </>
  );
}

export default Dashboard;
