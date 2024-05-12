import { Montserrat } from "next/font/google";
import Head from "next/head";
import Navbar from "./components/Navbar";
import "./globals.css";

const font = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Soufiane MASAD | Blockchain and Web 3.0 Developer",
  description: "Blockchain, Web 3.0 and Smart Contracts Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="twitter:title"
          content="Soufiane MASAD | Blockchain and Web 3.0 Developer"
        />
        <meta
          name="twitter:description"
          content="Soufiane MASAD | Blockchain and Web 3.0 Developer"
        />
        <meta
          name="twitter:image"
          content="https://drive.google.com/file/d/1G8494JZa2prrrDnJv5e5LRh4OhFKM_5C/view?usp=sharing"
        />
      </Head>
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
