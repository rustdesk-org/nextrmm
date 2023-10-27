"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { SideNavItem } from "~/types"
import { cn } from "~/lib/utils"
import { siteConfig } from "~/config/site"
import { Icons } from "~/components/icons"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
import { Separator } from "~/components/ui/separator"
import Link from "next/link"
import {
  CollapsibleContent,
} from "~/components/ui/collapsible"
import { controlboardConfig } from "~/config/control-board"

export function AsideShowNav(){
    const upItems:SideNavItem[] = controlboardConfig.sidebarUpNav
    const downItems:SideNavItem[] = controlboardConfig.sidebarDownNav
    const path = usePathname()
    if (!upItems?.length || !downItems?.length) {
      return null
    }
    return(
        <div>
            <Link href="/" className="mb-2 ml-8 mt-5 hidden items-center space-x-2 md:flex">
                <Icons.logo />
                <span className="hidden font-bold sm:inline-block">
                    {siteConfig.name}
                </span>
            </Link>
            {upItems.map((item, index) => {
            const Icon = Icons[item.icon || "arrowRight"]
            return (
                item.href && (
                    <Link key={index} href={item.disabled ? "/" : item.href}>
                    <span
                        className={cn(
                        "hover:bg-accent group flex items-center border-l-4 border-transparent px-4 py-2 text-sm font-semibold",
                        path === item.href ? " border-violet-500 text-violet-500" : "transparent",
                        item.disabled && "cursor-not-allowed opacity-80"
                        )}
                    >
                        <Icon className="mr-2 h-4 w-4 opacity-50" />
                        <span>{item.title}</span>
                    </span>
                    </Link>
                )
                )
            })}
            <Separator className="my-2 !border-[#efefef] !bg-[#efefef]" />
            {downItems.map((item, index) => {
            const Icon = Icons[item.icon || "arrowRight"]
            const Content = PopOverContents[item.content]
            return (
                <Popover key={index}>
                    <PopoverTrigger className="w-full">
                        <span
                            className={cn(
                                "hover:bg-accent group flex items-center border-l-4 border-transparent px-4 py-2 text-sm font-semibold")}
                            >
                            <Icon className="mr-2 h-4 w-4 opacity-50" />
                            <span>{item.title}</span>
                        </span>
                    </PopoverTrigger>
                    <PopoverContent><Content/></PopoverContent>
                </Popover>
                )
            })}
        </div>
    )
  }

export function AsideHiddenNav(){
    const upItems:SideNavItem[] = controlboardConfig.sidebarUpNav
    const downItems:SideNavItem[] = controlboardConfig.sidebarDownNav
    const path = usePathname()
    if (!upItems?.length || !downItems?.length) {
        return null
      }
    return(
        <CollapsibleContent>
        <div>
            <Link href="/" className="mb-2 ml-4 mt-5 hidden items-center md:flex">
                <Icons.logo/>
            </Link>
            {upItems.map((item, index) => {
                const Icon = Icons[item.icon || "arrowRight"]
                return (
                item.href && (
                    <Link key={index} href={item.disabled ? "/" : item.href}>
                        <span
                            className={cn(
                            "hover:bg-accent group flex items-center border-l-4 border-transparent px-4 py-2.5 text-sm font-semibold",
                            path === item.href ? " border-violet-500 text-violet-500" : " ",
                            item.disabled && "cursor-not-allowed opacity-80"
                            )}
                        >
                        <Icon className="mr-2 h-4 w-4 opacity-50" />
                    </span>
                    </Link>
                )
                )
            })}
            <Separator className="my-2 !border-[#efefef] !bg-[#efefef]" />
            {downItems.map((item, index) => {
            const Icon = Icons[item.icon || "arrowRight"]
            const Content = PopOverContents[item.content]
            return (
                <Popover key={index}>
                    <PopoverTrigger className="w-full">
                        <span
                            className={cn(
                                "hover:bg-accent group my-0.5 flex items-center border-l-4 border-transparent px-4 py-2")}
                            >
                            <Icon className="mr-2 h-4 w-4 opacity-50" />
                        </span>
                    </PopoverTrigger>
                    <PopoverContent><Content/></PopoverContent>
                </Popover>
                )
            })}
        </div>
        </CollapsibleContent>
    )
  }

export const PopOverContents:any = {
    favourite:()=>{
        return(<h1>Hello1</h1>)
    },
    recent:()=>{
        return(<h1>Hello2</h1>)
    }
};
