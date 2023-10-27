"use client"
import * as React from "react"
import { AsideHiddenNav,AsideShowNav } from "~/components/nav"
import { Button } from "~/components/ui/button"
import { Collapsible,CollapsibleTrigger } from "~/components/ui/collapsible"
import { Icons } from "~/components/icons"

export function BodyLayout({
    children,
  }: {
    children: React.ReactNode;
  }){
    const [isSideNavOpen,setisSideNavOpen] = React.useState(false)

    return(
        <div className={`container grid flex-1 gap-3 ${isSideNavOpen ? 'md:grid-cols-[50px_1fr]' : 'md:grid-cols-[200px_1fr]'} max-w-none px-0 transition-[width]`}>
            <aside className="hidden md:flex">
                <Collapsible open={isSideNavOpen} onOpenChange={setisSideNavOpen} className="fixed h-full ">
                        <nav className={`flex h-full flex-col items-start gap-0.5 bg-[#fefefe] transition-[width] duration-300 ${isSideNavOpen ? 'w-[50px]' : 'w-[200px]'}`}>
                            {
                                isSideNavOpen?
                                <AsideHiddenNav/>:
                                <AsideShowNav/>
                            }
                            <div className="flex h-full flex-col-reverse">
                                <CollapsibleTrigger asChild>
                                    <Button variant="ghost" size="sm">
                                        <Icons.asideSwitch className={`h-4 w-4 origin-center transition ${isSideNavOpen ? '' : 'rotate-180'}`} />
                                        <span className="sr-only">Toggle</span>
                                    </Button>
                                </CollapsibleTrigger>
                            </div>
                        </nav>
                </Collapsible>
            </aside>
            <main className="flex w-full flex-col overflow-y-auto ">
                {children}
            </main>
        </div>
    )
}
