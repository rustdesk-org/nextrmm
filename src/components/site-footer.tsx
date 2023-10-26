"use client";

import * as React from "react";
import { cn } from "~/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return <footer className={cn(className)}></footer>;
}
