import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { BodyLayout } from "~/components/body-layout";
import { SiteFooter } from "~/components/site-footer";
import { ThemeProvider } from "~/components/theme-provider";
import { siteConfig } from "~/config/site";
import { TRPCReactProvider } from "~/trpc/react";

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
  keywords: ["Next.js", "NextRMM", "RMM"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider headers={headers()}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <BodyLayout>{children}</BodyLayout>
            <SiteFooter className="border-t" />
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
