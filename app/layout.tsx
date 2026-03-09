import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollBackground } from "@/components/scroll-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KodeVink | Full-Stack Development",
  description: "Web apps, mobile solutions, and cloud architecture — built to scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ScrollBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}