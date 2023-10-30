"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import Link from "next/link";
import { Logo } from "../components/logo";
import clsx from "clsx";
import { Wrapper } from "../components/wrapper";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../components/ui/dropdown-menu";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="w-[calc(100vw - 20px)] border-b">
      <Wrapper className={`py-4`}>
        <Logo />
      </Wrapper>
    </div>
  );
};
