import Link from "next/link";
import { AuthForm } from "~/components/auth-form";
import { buttonVariants } from "~/components/ui/button";
import type { Locale } from "~/i18n-config";
import { getDictionary } from "~/lib/dictionary";
import { cn } from "~/lib/utils";
import { AuthFormType } from "~/types/index.d";

type Props = {
  params: { locale: Locale };
};

export default async function RegisterPage({ params: { locale } }: Props) {
  const d = await getDictionary(locale);

  return (
    <>
      <div className="container flex h-full min-h-screen w-full flex-col items-center justify-center">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8",
          )}
        >
          {d.register.login}
        </Link>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {d.register["create-account"]}
              </h1>
              <p className="text-sm text-muted-foreground">
                {d.register["enter-email"]}
              </p>
            </div>
            <AuthForm
              authFormType={AuthFormType.Register}
              locale={locale}
              d={d["auth-form"]}
            />
            <p className="px-8 text-center text-sm text-muted-foreground">
              {d.register["click-continue"]}{" "}
              <Link
                href="/terms"
                className="hover:text-brand underline underline-offset-4"
              >
                {d.register["term-service"]}
              </Link>{" "}
              {d.register.and}{" "}
              <Link
                href="/privacy"
                className="hover:text-brand underline underline-offset-4"
              >
                {d.register["privacy-policy"]}
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
