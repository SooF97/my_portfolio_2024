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
        <title>Soufiane MASAD | A Blockchain and Web 3.0 Developer</title>
        <meta
          name="description"
          content="I'm Soufiane MASAD, a dedicated Blockchain Developer on a mission to shape the future of businesses through blockchain and web3.0 technology. My passion lies in seamlessly integrating innovative Blockchain and Web3 solutions, transforming businesses and brands into pioneers of the digital frontier."
        />
        <meta
          name="keywords"
          content="blockchain, web 3.0, smart contract, defi, nft, rwa, token, ethereum, evm, solidity, hyperledger, chainlink"
        />
        {/* OPENA GRAPH METADATA: Metadata to be displayed when the link is shared across social media platforms */}
        <meta
          property="og:title"
          content="Soufiane MASAD | A Blockchain and Web 3.0 Developer"
        />
        <meta
          property="og:description"
          content="I'm Soufiane MASAD, a dedicated Blockchain Developer on a mission to shape the future of businesses through blockchain and web3.0 technology. My passion lies in seamlessly integrating innovative Blockchain and Web3 solutions, transforming businesses and brands into pioneers of the digital frontier."
        />
        <meta
          property="og:image"
          content="https://ipfs.io/ipfs/QmPkTbmQmX1RqdPjR9h68ArZryWunFuGdrGJwon8gLnY5D"
        />
      </Head>
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
