"use client";

import * as React from "react";
import { redirect, usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select-header-version";
import { i18n } from "~/i18n-config";
import { Icons } from "./icons";

export function LocaleSwitcher() {
  const pathName = usePathname();
  const [currentLocale, setCurrentLocale] = React.useState<string>("");

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";

    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const onSelect = (value: string) => {
    const url = redirectedPathName(value);

    redirect(url);
  };

  React.useEffect(() => {
    const segments = pathName.split("/");
    if (!segments[1]) return;
    setCurrentLocale(segments[1]);
  }, [pathName]);

  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger>
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-md px-0 hover:bg-accent hover:text-accent-foreground">
          <Icons.languages />
          <span className="sr-only">i18n</span>
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Locale</SelectLabel>
          {i18n.locales.map((locale) => {
            return (
              <SelectItem key={locale} value={locale} className="flex flex-row">
                <span>{locale.toUpperCase()}</span>
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
