import { Urbanist } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

import "./globals.css";
import QueryClientProvieder from "@/components/query-client";
import { ClerkProvider } from "@clerk/nextjs";
const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "this my store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <QueryClientProvieder>
          <ClerkProvider>
            <ModalProvider />
            <ToastProvider />

            <Navbar />
            {children}
            <Footer />
          </ClerkProvider>
        </QueryClientProvieder>
      </body>
    </html>
  );
}
