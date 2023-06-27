import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HypeFarm",
  description:
    "A leading marketing agency specializing in community management and comprehensive marketing services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
