import React from "react";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="hidden md:block h-screen bg-white fixed mt-[65px] w-64">
        <SideNav />
      </div>
      <div>
        <Header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md" />
        <div className="md:ml-64 p-10 pb-20 h-screen overflow-auto">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
