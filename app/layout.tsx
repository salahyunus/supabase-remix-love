// v0.0.01 salah

import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Sora } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastProvider } from "@/components/providers/toast-provider";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { ArrowBigLeft, Copy } from "lucide-react";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
import { Banner } from "@/components/bannerimp";
import { Suspense } from "react";
import Loading from "@/components/loading";
import { QueryProvider } from "@/components/providers/query-provider";
import dynamic from "next/dynamic";

const inter = Sora({ subsets: ["latin"] });
const CrispWithNoSSR = dynamic(() => import("../components/crisp"));

export const metadata: Metadata = {
  title: "Quackly | Code Smarter, Learn Faster",
  description:
    "Quackly helps you learn to code quickly with smart tools, interactive lessons, and a supportive community. Code faster, code better – with Quackly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
      // publishableKey={clerkPubKey}
    >
      <html lang="en">
        <head>
          <link rel="icon" href="/favicons/favicon.ico" type="image/x-icon" />
        </head>
        <body className={inter.className} suppressHydrationWarning={true}>
          {/* <ContextMenu> */}
          {/* <ContextMenuTrigger> */}
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
            storageKey="quackly-theme"
            // enableSystem
            // disableTransitionOnChange
          >
            <Suspense>
              <ConfettiProvider />
              <ToastProvider />
              {/* <Banner
              label="Site is still under development. Features are still being worked on!"
              variant={"development"}
            />{" "} */}
              <QueryProvider>
                {children} <CrispWithNoSSR />
              </QueryProvider>
            </Suspense>
          </ThemeProvider>
          {/* </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>
                <ArrowBigLeft /> {"  "}Back
              </ContextMenuItem>
              <ContextMenuItem>
                <Copy className="mr-2" /> {"  "}Copy
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
