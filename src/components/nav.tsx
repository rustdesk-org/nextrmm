"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { HeadNavItem,SideNavItem } from "~/types"
import { cn } from "~/lib/utils"
import { siteConfig } from "~/config/site"
import { Input } from "~/components/ui/input"
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

interface SideNavProps {
  items: SideNavItem[]
}

export function AsideShowNav({ items }: SideNavProps){
  const path = usePathname()
  if (!items?.length) {
    return null
  }
  return(
      <nav className={"grid items-start gap-0.5 w-[200px] bg-[#fefefe]"}>
          <Link href="/" className="hidden items-center space-x-2 ml-8 mb-2 mt-5 md:flex">
              <Icons.logo />
              <span className="hidden font-bold sm:inline-block">
                  {siteConfig.name}
              </span>
          </Link>
          {items.map((item, index) => {
          const Icon = Icons[item.icon || "arrowRight"]
          return (
              item.href && (
                  <Link key={index} href={item.disabled ? "/" : item.href}>
                  <span
                      className={cn(
                      "group flex items-center text-sm font-semibold py-2 px-4 border-l-4 border-transparent hover:bg-accent",
                      path === item.href ? " text-violet-500 border-violet-500" : "transparent",
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
          <Popover >
              <PopoverTrigger >
                  <span
                      className={cn(
                          "group flex items-center text-sm font-semibold py-2 px-4 border-l-4 border-transparent hover:border-transparent hover:bg-accent")}
                  >
                      <Icons.favourite className="mr-2 h-4 w-4 opacity-50" />
                      <span>favourite</span>
                  </span>
              </PopoverTrigger>
              <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
          <Popover >
              <PopoverTrigger >
                    <span
                      className={cn(
                          "group flex items-center text-sm font-semibold py-2 px-4 border-l-4 border-transparent hover:border-transparent hover:bg-accent")}
                    >
                      <Icons.recent className="mr-2 h-4 w-4 opacity-50" />
                      <span>recent</span>
                  </span>
              </PopoverTrigger>
              <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
      </nav>
  )
}

export function AsideHiddenNav({ items }: SideNavProps){
  const path = usePathname()
  if (!items?.length) {
    return null
  }
  return(
      <CollapsibleContent>
          <nav className="grid items-start gap-0.5 w-[50px] bg-[#fefefe]">
              <Link href="/" className="hidden items-center mb-2 mt-5 ml-4 md:flex">
                  <Icons.logo/>
              </Link>
              {items.map((item, index) => {
                  const Icon = Icons[item.icon || "arrowRight"]
                  return (
                  item.href && (
                      <Link key={index} href={item.disabled ? "/" : item.href}>
                        <span
                            className={cn(
                            "group flex items-center text-sm font-semibold py-2.5 px-4 border-l-4 border-transparent hover:bg-accent",
                            path === item.href ? " text-violet-500 border-violet-500" : " ",
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
          <Popover >
              <PopoverTrigger >
                  <span
                      className={cn(
                      "group flex items-center py-2 my-0.5 px-4 border-l-4 border-transparent hover:border-transparent hover:bg-accent")}
                  >
                      <Icons.favourite className="mr-2 h-4 w-4 opacity-50" />
                  </span>
              </PopoverTrigger>
              <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
          <Popover >
              <PopoverTrigger >
                  <span
                      className={cn(
                      "group flex items-center py-2 my-0.5 px-4 border-l-4 border-transparent hover:border-transparent hover:bg-accent")}
                  >
                      <Icons.recent className="mr-2 h-4 w-4 opacity-50" />    
                  </span>
              </PopoverTrigger>
              <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
          </nav>
      </CollapsibleContent>
  )
}