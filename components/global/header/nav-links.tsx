"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ConnectButton from "./connect-button";
import Link from "next/link";

const NavLinks = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Links</NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col items-center py-2 px-2 gap-2">
            <NavigationMenuLink asChild>
              <Link href={"/"}>About</Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href={"/"}>Guide</Link>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <ConnectButton />
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLinks;
