"use client"

import * as React from "react"
import { siteConfig } from "~/config/site"
import { cn } from "~/lib/utils"
import { Icons } from "~/components/icons"
import { ModeToggle } from "~/components/mode-toggle"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
    </footer>
  )
}
