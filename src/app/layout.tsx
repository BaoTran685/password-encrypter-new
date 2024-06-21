import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import InnerLayout from "@/layouts/innerLayout";
import ContextProvider from "@/provider/contextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Text Encrypter",
  description: "Text Encrypter using RSA-256-CBC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <InnerLayout>
            {children}
          </InnerLayout>
        </ContextProvider>
      </body>
    </html>
  );
}
