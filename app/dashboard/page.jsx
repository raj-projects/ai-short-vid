"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import EmpityState from "./_components/EmpityState";

function Dashboard() {
  const [videoList, setVideoList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl text-primary">Dashboard</h2>
        <Button>+ Create New</Button>
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
