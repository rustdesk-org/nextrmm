"use client";

import * as React from "react";
import { Button } from "~/components/ui/button";
import { i18n } from "~/i18n-config";
import { Icons } from "./icons";

export function HeaderSearch() {
  return (
    <div>
      <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
        <Icons.search />
        <span className="sr-only">Search</span>
      </Button>
    </div>
  );
}
