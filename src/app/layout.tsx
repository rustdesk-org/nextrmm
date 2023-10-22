import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { siteConfig } from "~/config/site"

import { controlboardConfig } from "~/config/control-board"
import { HeadNav,SideNav } from "~/components/nav"
import { DashboardNav } from "~/components/nav"
import { SiteFooter } from "~/components/site-footer"
// import { UserAccountNav } from "~/components/user-account-nav"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "NextRMM",
    "RMM",
  ],
  creator: "NextRMM",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
  },
  // manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider headers={headers()}>
            <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
              <aside className="hidden w-[200px] flex-col md:flex">
                <SideNav items={controlboardConfig.sidebarNav} />
              </aside>
              <div className="flex min-h-screen flex-col space-y-6">
                <header className="sticky top-0 z-40 border-b bg-background">
                    <HeadNav />
                </header>
                <main className="flex w-full flex-1 flex-col overflow-hidden">
                  {children}
                </main>
              </div>
            </div>
            <SiteFooter className="border-t" />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
