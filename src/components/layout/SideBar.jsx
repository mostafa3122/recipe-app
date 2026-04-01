
"use client";

import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo } from "flowbite-react";

import { LuUtensils } from "react-icons/lu";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";


export default function SideBar() {

  return (

    <Sidebar className="fixed top-0 left-0 bottom-0 "   aria-label="Sidebar with multi-level dropdown example">
      <SidebarLogo className="my-8 hover:scale-110 duration-300 transition-all" href="/">
        <img width={200} height={200} src={logo} alt="logo" />
      </SidebarLogo>
      <SidebarItems >
        <SidebarItemGroup>
          <SidebarItem as={Link} to="/" className="bg-amber-500 text-lg px-3 mb-4 font-semibold text-white hover:bg-amber-500 hover:scale-105 duration-300 transition-all [&_svg]:text-white [&_svg]:w-5 [&_svg]:h-5" href="#" icon={LuUtensils} >
            Meals
          </SidebarItem>
          <SidebarItem className=" border text-lg px-3 mb-4 font-semibold border-zinc-300 hover:scale-105 duration-300 transition-all [&_svg]:text-black [&_svg]:w-5 [&_svg]:h-5" href="#" icon={LuUtensils}>
            Ingrediants
          </SidebarItem>
          <SidebarItem className=" border text-lg px-3 mb-4 font-semibold border-gray-300 hover:scale-105 duration-300 transition-all [&_svg]:text-black [&_svg]:w-5 [&_svg]:h-5" href="#" icon={LuUtensils}>
            Area
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>

  );
}
