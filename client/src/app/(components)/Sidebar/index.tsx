"use client";
import {
  Archive,
  CircleDollarSign,
  Clipboard,
  Layout,
  LucideIcon,
  Menu,
  SlidersHorizontal,
  User,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Stockify from "../../../../public/Stockify4.png";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";

import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  return (
    <div
      className={`fixed flex flex-col ${
        isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
      } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`}
    >
      <div className="flex gap-3 justify-between md:justify-normal items-ceter pt-8">
        <Image src={Stockify} alt="stockify-logo" className="rounded w-16" />
        <h1 className="font-extrabold text-2xl">STOKIFY</h1>
        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
      <div className="flex-grow mt-8">
        <SidebarLink
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/inventory"
          icon={Archive}
          label="Inventory"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/products"
          icon={Clipboard}
          label="Products"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/users"
          icon={User}
          label="Users"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/settings"
          icon={SlidersHorizontal}
          label="Settings"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/expenses"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={isSidebarCollapsed}
        />
      </div>
      <div>
        <p className="text-center text-xs text-gray-500">
          &copy; 2024 Stockify
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
