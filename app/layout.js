import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "$McSHIB",
  description:
    "I mean, Look at this GUY he lost it all trading cryptocurrency market and now back to his old job",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="w-full min-h-screen bg-[#FFC72C] text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
