import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const description = "Annual Tech fest of Bennett University";

export const metadata: Metadata = {
  title: `Zenevia: ${description}`,
  description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx("dark", poppins.className)}>
      <body>{children}</body>
    </html>
  );
}
