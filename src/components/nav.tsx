"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "~/components/icons";
import { CollapsibleContent } from "~/components/ui/collapsible";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Separator } from "~/components/ui/separator";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { SideNavItem } from "~/types";

interface SideNavProps {
  items: SideNavItem[];
}

export function AsideShowNav({ items }: SideNavProps) {
  const path = usePathname();
  if (!items?.length) {
    return null;
  }
  return (
    <nav className={"grid w-[200px] items-start gap-0.5 bg-[#fefefe]"}>
      <Link
        href="/"
        className="mb-2 ml-8 mt-5 hidden items-center space-x-2 md:flex"
      >
        <Icons.logo />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items.map((item, index) => {
        const Icon = Icons[item.icon || "arrowRight"];
        return (
          item.href && (
            <Link key={index} href={item.disabled ? "/" : item.href}>
              <span
                className={cn(
                  "group flex items-center border-l-4 border-transparent px-4 py-2 text-sm font-semibold hover:bg-accent",
                  path === item.href
                    ? " border-violet-500 text-violet-500"
                    : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                <Icon className="mr-2 h-4 w-4 opacity-50" />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
      <Separator className="my-2 !border-[#efefef] !bg-[#efefef]" />
      <Popover>
        <PopoverTrigger>
          <span
            className={cn(
              "group flex items-center border-l-4 border-transparent px-4 py-2 text-sm font-semibold hover:border-transparent hover:bg-accent",
            )}
          >
            <Icons.favourite className="mr-2 h-4 w-4 opacity-50" />
            <span>favourite</span>
          </span>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <span
            className={cn(
              "group flex items-center border-l-4 border-transparent px-4 py-2 text-sm font-semibold hover:border-transparent hover:bg-accent",
            )}
          >
            <Icons.recent className="mr-2 h-4 w-4 opacity-50" />
            <span>recent</span>
          </span>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </nav>
  );
}

export function AsideHiddenNav({ items }: SideNavProps) {
  const path = usePathname();
  if (!items?.length) {
    return null;
  }
  return (
    <CollapsibleContent>
      <nav className="grid w-[50px] items-start gap-0.5 bg-[#fefefe]">
        <Link href="/" className="mb-2 ml-4 mt-5 hidden items-center md:flex">
          <Icons.logo />
        </Link>
        {items.map((item, index) => {
          const Icon = Icons[item.icon || "arrowRight"];
          return (
            item.href && (
              <Link key={index} href={item.disabled ? "/" : item.href}>
                <span
                  className={cn(
                    "group flex items-center border-l-4 border-transparent px-4 py-2.5 text-sm font-semibold hover:bg-accent",
                    path === item.href
                      ? " border-violet-500 text-violet-500"
                      : " ",
                    item.disabled && "cursor-not-allowed opacity-80",
                  )}
                >
                  <Icon className="mr-2 h-4 w-4 opacity-50" />
                </span>
              </Link>
            )
          );
        })}
        <Separator className="my-2 !border-[#efefef] !bg-[#efefef]" />
        <Popover>
          <PopoverTrigger>
            <span
              className={cn(
                "group my-0.5 flex items-center border-l-4 border-transparent px-4 py-2 hover:border-transparent hover:bg-accent",
              )}
            >
              <Icons.favourite className="mr-2 h-4 w-4 opacity-50" />
            </span>
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <span
              className={cn(
                "group my-0.5 flex items-center border-l-4 border-transparent px-4 py-2 hover:border-transparent hover:bg-accent",
              )}
            >
              <Icons.recent className="mr-2 h-4 w-4 opacity-50" />
            </span>
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
      </nav>
    </CollapsibleContent>
  );
}
