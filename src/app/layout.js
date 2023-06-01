import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./Header/page";
import Footer from "./Footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "It Agency",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Header />
        <div className="container ">
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
