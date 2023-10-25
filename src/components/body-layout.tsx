"use client"
import * as React from "react"
import { HeadNav,AsideHiddenNav,AsideShowNav } from "~/components/nav"
import { controlboardConfig } from "~/config/control-board"
import { Button } from "~/components/ui/button"
import { Collapsible,CollapsibleTrigger } from "~/components/ui/collapsible"
import { CaretSortIcon } from "@radix-ui/react-icons"
import { CountContext } from '~/components/body-layout';
import { usePathname } from "next/navigation"
import { Icons } from "~/components/icons"
import { siteConfig } from "~/config/site"


export function BodyLayout({
    children,
  }: {
    children: React.ReactNode;
  }){
    const [isSideNavOpen,setisSideNavOpen] = React.useState(false)

    function SideWidthShort(){
        return(
            <div className="container grid flex-1 gap-3 md:grid-cols-[50px_1fr]  max-w-none px-0">
                <AsideBody />
                <MainBody />
            </div>
        )
    }

    function SideWidthLong(){
        return(
            <div className="container grid flex-1 gap-3 md:grid-cols-[200px_1fr]  max-w-none px-0">
                <AsideBody />
                <MainBody />
            </div>
        )
    }

    function AsideBody(){
        return(
            <aside className="hidden md:flex">
                <Collapsible open={isSideNavOpen} onOpenChange={setisSideNavOpen} className="fixed h-full">
                    <div>
                        {
                        isSideNavOpen?
                        <AsideHiddenNav items={controlboardConfig.sidebarNav}/>:
                        <AsideShowNav items={controlboardConfig.sidebarNav}/>
                        }
                    </div>
                    <div className="flex flex-col-reverse h-[42%]">
                        <div>
                            <CollapsibleTrigger asChild>
                                <Button variant="ghost" size="sm">
                                    <Icons.asideSwitch className="h-4 w-4" />
                                    <span className="sr-only">Toggle</span>
                                </Button>
                            </CollapsibleTrigger>
                        </div>
                    </div>
                </Collapsible>
            </aside>
        )
    }

    function MainBody(){
        return(
            <div className="flex min-h-screen flex-col space-y-6">
                <main className="flex w-full flex-1 flex-col overflow-hidden">
                    {children}
                </main>
            </div>
        )
    }

    if (isSideNavOpen) {
        return <SideWidthShort/>;
    }
    return <SideWidthLong/>;
}