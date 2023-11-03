import Link from "next/link";
import { Icons } from "~/components/icons";
import { buttonVariants } from "~/components/ui/button";
import { siteConfig } from "~/config/site";
import type { Locale } from "~/i18n-config";
import { getDictionary } from "~/lib/dictionary";
import { cn } from "~/lib/utils";

type Props = {
  children: React.ReactNode;
  params: { locale: Locale };
};

export default async function Layout({ children, params: { locale } }: Props) {
  const d = await getDictionary(locale);

  return (
    <>
      <div className="absolute top-0 mx-auto w-full px-8 pt-6 sm:px-6 md:w-1/2 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex shrink-0 grow items-center md:pl-4 lg:grow-0">
            <Link
              href="/"
              className="flex w-full items-center space-x-2 md:w-auto"
            >
              <Icons.logo />
              <span className="font-bold">{siteConfig.name}</span>
            </Link>
          </div>
          {/* <div className=" hidden items-center md:ml-10 md:flex md:pr-4">
            <Link
              href="/document"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "flex items-center justify-center space-x-2",
              )}
            >
              <Icons.bookText size={15} />
              <span>{d["auth-layout"].document}</span>
            </Link>
          </div> */}
        </nav>
      </div>
      <main className="md:grid md:grid-cols-2">
        <div className="">{children}</div>
        <div className=" bg-auth-bg"></div>
      </main>
      <div className="absolute bottom-12 w-full px-8 text-center md:w-1/2">
        <p className="mx-auto text-xs text-muted-foreground">
          {d["auth-layout"]["click-continue"]}{" "}
          <Link
            href="/terms"
            className="hover:text-brand underline underline-offset-4"
          >
            {d["auth-layout"]["term-service"]}
          </Link>{" "}
          {d["auth-layout"].and}{" "}
          <Link
            href="/privacy"
            className="hover:text-brand underline underline-offset-4"
          >
            {d["auth-layout"]["privacy-policy"]}
          </Link>
          .
        </p>
      </div>
    </>
  );
}
