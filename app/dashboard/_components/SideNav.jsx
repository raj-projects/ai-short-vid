import React from "react";
import { PanelsTopLeft, FileVideo, ShieldPlus, CircleUser } from "lucide-react";
import Link from "next/link";

function SideNav() {
  const MenuOptions = [
    { id: 1, name: "Dashboard", path: "/dashboard", icon: PanelsTopLeft },
    { id: 2, name: "Create new", path: "/create-new", icon: FileVideo },
    { id: 3, name: "Upgrade", path: "/upgrade", icon: ShieldPlus },
    { id: 4, name: "Account", path: "/account", icon: CircleUser },
  ];

  return (
    <div className="w-64 h-screen shadow-md p-5">
      <div>
        {MenuOptions.map((item, index) => (
          <Link href={item.path} key={index}>
            <div className="flex items-center gap-3 p-3 hover:bg-primary hover:text-white rounded-md cursor-pointer">
              <item.icon className="w-5 h-5" />
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
