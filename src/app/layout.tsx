import type { Metadata } from "next";
import { Inter, Joti_One, Podkova } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const podkova = Podkova({ subsets: ["latin"] });
export const joti_one = Joti_One({ subsets: ["latin"], weight: ['400'] });

export const metadata: Metadata = {
  title: "Blog",
  description: "Curiosidades sobre o planeta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${podkova.className}  bg-black`}>{children}</body>

    </html>
  );
}
