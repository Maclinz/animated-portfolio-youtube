import React from "react";
import "./styles/main.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "./Components/Navigation/Navigation";
import Menu from "./Components/Menu/Menu";
import Progressbar from "./Components/Progressbar";
import { GlobalProvider } from "./utils/globalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Code Dealer",
  description: "The code dealer is a portfolio website for a web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          <Progressbar />
          <Navigation />
          <Menu />
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
