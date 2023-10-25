export enum AuthFormType {
  SignIn,
  Register,
}

import type { Icon } from "lucide-react"

import { Icons } from "~/components/icons"

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    github: string
  }
}

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type HeadNavItem = NavItem

export type SideNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export type ControlboardConfig = {
  sidebarNav: SidebarNavItem[]
}