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

interface HeadNavProps {
  children?: React.ReactNode
}

interface SideNavProps {
  items: SideNavItem[]
}

export function HeadNav({ children }: HeadNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)
  return (
    <div className="flex h-12 items-center py-4 gap-6 md:gap-10">
      <Input
        className="w-4/12"
        placeholder="Search"
      />
      <div className="flex flex-row-reverse w-8/12">
      </div>
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">Menu</span>
      </button>
    </div>
  )
}

export function AsideShowNav({ items }: SideNavProps){
  const path = usePathname()
  if (!items?.length) {
    return null
  }
  return(
      <nav className={"grid items-start gap-1 w-[200px] bg-[#fefefe]"}>
          <Link href="/" className="hidden items-center space-x-2 ml-8 my-5 md:flex">
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
                      "group flex items-center text-sm font-semibold py-2 px-4 border-l-4 border-transparent hover:text-violet-500 hover:border-violet-500 ",
                      path === item.href ? "bg-accent" : "transparent",
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
                          "group flex items-center text-sm font-semibold py-2 px-4 border-l-4 border-transparent hover:text-violet-500 hover:border-violet-500")}
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
                          "group flex items-center text-sm font-semibold py-2 px-4 border-l-4 border-transparent hover:text-violet-500 hover:border-violet-500")}
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
          <nav className={`grid items-start gap-1 w-[50px] bg-[#fefefe]`}>
              <Link href="/" className="hidden items-center my-5 ml-4 md:flex">
                  <Icons.logo/>
              </Link>
              {items.map((item, index) => {
                  const Icon = Icons[item.icon || "arrowRight"]
                  return (
                  item.href && (
                      <Link key={index} href={item.disabled ? "/" : item.href}>
                        <span
                            className={cn(
                            "group flex items-center text-sm py-2 my-0.5 px-4 border-l-4 border-transparent hover:text-violet-500 hover:border-violet-500 ",
                            path === item.href ? "bg-accent" : "transparent",
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
                      "group flex items-center py-2 my-0.5 px-4 border-l-4 border-transparent hover:text-violet-500 hover:border-violet-500")}
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
                      "group flex items-center py-2 my-0.5 px-4 border-l-4 border-transparent hover:text-violet-500 hover:border-violet-500")}
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