// ✅ Correct for /app/dashboard/layout.jsx
import React from "react";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="hidden md:block h-screen bg-white fixed mt-[65px] w-64">
        <SideNav />
      </div>
      <div>
        <Header />
        <div className="md:ml-64">{children}</div>
        <Footer />
      </div>
    </>
  );
}
