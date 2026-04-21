import type { Metadata } from "next";
import { League_Gothic } from "next/font/google";
// @ts-ignore
import "./globals.css";

const leagueGothic = League_Gothic({
  subsets: ["latin"],
  variable: "--font-league-gothic",
});

export const metadata: Metadata = {
  title: "Jeol. | Joel. Design.",
  description: "Experience Designer Portfolio.",
  icons: {
    icon: "icons/jeol-logo.svg",
    apple: "icons/jeol-logo.svg", // For iPhone home screens.
  },
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