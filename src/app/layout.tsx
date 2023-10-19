import Providers from "@/lib/Providers";
import ToasterProvider from "@/lib/ToasterProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elite Educators",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en" data-theme="light">
        <body className={inter.className} suppressHydrationWarning={true}>
          <ToasterProvider>{children}</ToasterProvider>
        </body>
      </html>
    </Providers>
  );
}
