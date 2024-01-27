import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import HomePage from "@/app/home/HomePage";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Steven Fojas's Personal Site",
  description: "Just a little about me, my experience, projects, hobbies, etc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
