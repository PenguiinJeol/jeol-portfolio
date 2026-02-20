import type { Metadata } from "next";
import { League_Gothic } from "next/font/google";
import "./globals.css";

const leagueGothic = League_Gothic({
  subsets: ["latin"],
  variable: "--font-league-gothic",
});

export const metadata: Metadata = {
  title: "JEOL | Portfolio",
  description: "Architectural Portfolio",
};

// Add { children }: { children: React.ReactNode } here
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${leagueGothic.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}