import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/dashboard/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dashboard | Alle Tech",
    template: "%s | Alle Tech Dashboard",
  },
  description: "Alle Tech content management dashboard.",
};

export default function DashboardRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
