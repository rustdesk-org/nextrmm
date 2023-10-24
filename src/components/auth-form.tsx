"use client";

import * as React from "react";
import { signIn } from "next-auth/react";

import { cn } from "~/lib/utils";
import { Icons } from "~/components/icons";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useSearchParams } from "next/navigation";
import { authDataSchema } from "~/lib/validation/auth";
import { AuthFormType } from "~/types/index.d";

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  authFormType: AuthFormType;
}

export function AuthForm({ className, authFormType, ...props }: AuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");
  const searchParams = useSearchParams();

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    const isEmailValid = authDataSchema.safeParse({ email });

    if (!isEmailValid.success) {
      console.info("Invalid Email.", isEmailValid.error);
      setIsLoading(false);
      return;
    }

    const result = await signIn("email", {
      email: isEmailValid.data.email,
      redirect: false,
      callbackUrl: searchParams.get("from") || "/",
    });

    setIsLoading(false);

    if (!result?.ok) {
      console.info("Sign in failed.", result?.error);
      return;
    }

    console.info("Please check your email.");

    setEmail("");
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              value={email}
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {authFormType === AuthFormType.SignIn
              ? "Sign In with Email"
              : "Sign Up with Email"}
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="grid gap-4">
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.google className="mr-2 h-4 w-4" />
          )}{" "}
          Google
        </Button>
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          onClick={() => signIn("github", { callbackUrl: "/" })}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 h-4 w-4" />
          )}{" "}
          GitHub
        </Button>
      </div>
    </div>
  );
}
