"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function LogOutPage() {
  return (
    <>
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Sign Out</CardTitle>
            <CardDescription>
              Are you sure you want to sign out?
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/">
              <Button variant="outline">Go back</Button>
            </Link>
            <Button
              type="button"
              onClick={() => {
                signOut({
                  callbackUrl: `${window.location.origin}/login`,
                  redirect: true,
                });
              }}
            >
              Yes, go ahead
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
