import { User } from "next-auth";
import { UserAccountNav } from "~/components/user-account-nav";
import { HeaderSearch } from "./header-search";
import { LocaleSwitcher } from "./locale-switcher";
import { ModeToggle } from "./mode-toggle";

interface Props {
  user: User;
}

export function Header({ user }: Props) {
  return (
    <header className="absolute right-0 top-0 py-1 pr-4">
      <div className="flex justify-end gap-2">
        <HeaderSearch />
        <ModeToggle />
        <LocaleSwitcher />
        <UserAccountNav user={user} />
      </div>
    </header>
  );
}
