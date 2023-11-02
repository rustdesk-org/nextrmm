import Link from "next/link";
import { Icons } from "~/components/icons";
import { buttonVariants } from "~/components/ui/button";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="absolute top-0 mx-auto w-full px-8 pt-6 sm:px-6 lg:px-8">
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
          <div className=" hidden items-center md:ml-10 md:flex md:pr-4">
            <Link
              href="/document"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "flex items-center justify-center space-x-2",
              )}
            >
              <Icons.bookText size={15} />
              <span>Document</span>
            </Link>
          </div>
        </nav>
      </div>
      <main className="min-w-screen min-h-screen">{children}</main>
      <div className="absolute bottom-12 w-full px-4 text-center">
        <p className="text-xs text-muted-foreground">
          By continuing, you agree to NextRMM&apos;s{" "}
          <Link
            href="/terms"
            className="hover:text-brand underline underline-offset-4"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="hover:text-brand underline underline-offset-4"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </>
  );
}
