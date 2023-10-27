import { ControlBoardConfig } from "~/types"

export const controlboardConfig: ControlBoardConfig = {
  sidebarUpNav: [
    {
      title: "Dashboard",
      href: "/",
      icon: "dashboard",
    },
    {
      title: "Machines",
      href: "/machines",
      icon: "machines",
    },
    {
      title: "Agents",
      href: "/agents",
      icon: "agents",
    },
    {
      title: "Document",
      href: "/document",
      icon: "document",
    },
    {
      title: "Support",
      href: "/support",
      icon: "help",
    },
    {
      title: "Settings",
      href: "/settings",
      icon: "settings",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  sidebarDownNav: [
    {
      title: "Favourite",
      icon: "favourite",
      content: "favourite"
    },
    {
      title: "Recent",
      icon: "recent",
      content: "recent"
    },
  ],
}
