"use client";

import * as React from "react";
import { User } from "next-auth";
import { AsideHidden, AsideShow } from "~/components/aside";
import { Header } from "~/components/header";
import { Icons } from "~/components/icons";
import { Button } from "~/components/ui/button";
import { Collapsible, CollapsibleTrigger } from "~/components/ui/collapsible";

interface Props {
  user: User;
  children: React.ReactNode;
}

export function BodyLayout({ user, children }: Props) {
  const [isSideNavOpen, setisSideNavOpen] = React.useState(false);

  return (
    <div
      className={`container grid flex-1 ${
        isSideNavOpen ? "md:grid-cols-[50px_1fr]" : "md:grid-cols-[200px_1fr]"
      } max-w-none px-0 transition-[width]`}
    >
      <aside className="hidden md:flex">
        <Collapsible
          open={isSideNavOpen}
          onOpenChange={setisSideNavOpen}
          className="fixed h-full "
        >
          <nav
            className={`border-inherit/50 flex h-full flex-col items-start gap-0.5 border-r transition-[width] duration-300 dark:bg-inherit ${
              isSideNavOpen ? "w-[50px]" : "w-[200px]"
            }`}
          >
            {isSideNavOpen ? <AsideHidden /> : <AsideShow />}
            <div className="flex h-full flex-col-reverse">
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Icons.asideSwitch
                    className={`h-4 w-4 origin-center transition ${
                      isSideNavOpen ? "" : "rotate-180"
                    }`}
                  />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
          </nav>
        </Collapsible>
      </aside>
      <div className="relative">
        <Header user={user} />
        <main className="flex w-full flex-col overflow-y-auto ">
          {children}
        </main>
      </div>
    </div>
  );
}
