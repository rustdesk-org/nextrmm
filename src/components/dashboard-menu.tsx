"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { dashboardMenuConfig } from "~/config/dashboard-menu";
import { DashboardMenuConfig, DashboardMenuItem } from "~/types";

export function DashboardMenu() {
  const Items: DashboardMenuItem[] = dashboardMenuConfig.dashboardMenu;
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Items.map((item, index) => {
          return (
            <NavigationMenuItem key={index}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
