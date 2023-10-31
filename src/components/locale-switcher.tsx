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
} from "~/components/ui/select";
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
      <SelectTrigger className="w-[160px] border-none hover:bg-accent focus:ring-0">
        <div className="flex flex-row items-center gap-2">
          <Icons.languages size={10} />
          <SelectValue placeholder={currentLocale.toUpperCase()} />
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
