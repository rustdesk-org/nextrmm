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
    const [isOpen, setIsOpen] = React.useState(false)

    function SideNav(){
        if(isOpen){
            return(<AsideHiddenNav items={controlboardConfig.sidebarNav}/>)
        }else{
            return(<AsideShowNav items={controlboardConfig.sidebarNav}/>)
        }
    }

    function SideWidthShort(){
        return(<div className="container grid flex-1 gap-3 md:grid-cols-[50px_1fr]  max-w-none px-0">
            <aside className="hidden md:flex">
                <Collapsible open={isOpen} onOpenChange={setIsOpen} className="fixed h-full">
                    <div>
                        <SideNav/>
                    </div>
                    <div className="flex flex-col-reverse h-[35%]">
                            <CollapsibleTrigger asChild>
                                <Button variant="ghost" size="sm">
                                    <Icons.asideSwitch className="h-4 w-4" />
                                    <span className="sr-only">Toggle</span>
                                </Button>
                            </CollapsibleTrigger>
                    </div>
                </Collapsible>
            </aside>
            <div className="flex min-h-screen flex-col space-y-6">
                <header className="sticky top-0 z-40 border-b bg-background">
                    <HeadNav />
                </header>
                <main className="flex w-full flex-1 flex-col overflow-hidden">
                    {children}
                </main>
            </div>
        </div>)
    }

    function SideWidthLong(){
        return(<div className="container grid flex-1 gap-3 md:grid-cols-[200px_1fr]  max-w-none px-0">
            <aside className="hidden md:flex">
                <Collapsible open={isOpen} onOpenChange={setIsOpen} className="fixed h-full">
                    <div>
                        <SideNav/>
                    </div>
                    <div className="flex flex-col-reverse h-[35%]">
                            <CollapsibleTrigger asChild>
                                <Button variant="ghost" size="sm">
                                    <Icons.asideSwitch className="h-4 w-4" />
                                    <span className="sr-only">Toggle</span>
                                </Button>
                            </CollapsibleTrigger>
                    </div>
                </Collapsible>
            </aside>
            <div className="flex min-h-screen flex-col space-y-6">
                <header className="sticky top-0 z-40 border-b bg-background">
                    <HeadNav />
                </header>
                <main className="flex w-full flex-1 flex-col overflow-hidden">
                    {children}
                </main>
            </div>
        </div>)
    }

    if (isOpen) {
        return <SideWidthShort/>;
    }
    return <SideWidthLong/>;
}