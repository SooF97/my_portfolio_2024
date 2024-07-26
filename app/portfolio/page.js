import Image from "next/image";
import Link from "next/link";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { TbWorld } from "react-icons/tb";

const page = () => {
  return (
    <>
      <section className="w-full md:px-12 py-8 md:py-16">
        <div className=" px-4 md:px-6 text-center">
          <div className="flex flex-col justify-center items-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-100 tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Projects
            </h1>
            <p className=" text-gray-400 md:text-xl dark:text-gray-400">
              Discover various kind of blockchain-based applications, from NFT
              marketplace to document registration.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-8 md:px-16 md:py-2 mb-8">
        <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
          <div className="flex h-full hover:scale-105 hover:transition-all hover:duration-300 flex-col justify-between rounded-lg border border-gray-200 hover:bg-[#cfef00] bg-gray-200 p-6 shadow-sm transition-colors hover:border-gray-300  ">
            <div className="space-y-4">
              <Image
                src="/tikeey.png"
                alt="nft dapp"
                width={400}
                height={400}
                className="rounded-lg"
              />

              <h3 className="text-xl font-semibold flex flex-row gap-2 items-center ">
                NFT Ticketing dApp{" "}
                <Link href="https://github.com/SooF97/Tikeey" target="_blank">
                  <FaGithub className="text-gray-950 w-5 h-5" />
                </Link>
                <Link href="https://tikeey-main.netlify.app/" target="_blank">
                  <TbWorld className="text-gray-950 w-5 h-5" />
                </Link>
              </h3>

              <p className="text-gray-600 ">
                A dApp that leverages blockchain technology to turn event
                tickets into NFTs.
              </p>
            </div>
          </div>

          <div className="flex h-full hover:scale-105 hover:transition-all hover:duration-300 flex-col justify-between rounded-lg border border-gray-200 hover:bg-[#cfef00] bg-gray-200 p-6 shadow-sm transition-colors hover:border-gray-300  ">
            <div className="space-y-4">
              <Image
                src="/voting.png"
                alt="voting dapp"
                width={400}
                height={400}
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold flex flex-row gap-2 items-center">
                Voting dApp{" "}
                <Link
                  href="https://github.com/SooF97/voting_dapp"
                  target="_blank"
                >
                  <FaGithub className="text-gray-950 w-5 h-5" />
                </Link>
                <Link href="https://polkaboom.com" target="_blank">
                  <TbWorld className="text-gray-950 w-5 h-5" />
                </Link>
              </h3>
              <p className="text-gray-600 ">
                A dApp built that ensures a secure, transparent, and
                tamper-proof voting experience.
              </p>
            </div>
          </div>

          <div className="flex h-full hover:scale-105 hover:transition-all hover:duration-300 flex-col justify-between rounded-lg border border-gray-200 hover:bg-[#cfef00] bg-gray-200 p-6 shadow-sm transition-colors hover:border-gray-300  ">
            <div className="space-y-4">
              <Image
                src="/zrchain.png"
                alt="blockchain application"
                width={400}
                height={400}
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold flex flex-row gap-2 items-center">
                Document dApp{" "}
                <Link href="https://github.com/SooF97/ZrChain" target="_blank">
                  <FaGithub className="text-gray-950 w-5 h-5" />
                </Link>
                <Link href="https://zrchain.netlify.app/" target="_blank">
                  <TbWorld className="text-gray-950 w-5 h-5" />
                </Link>
              </h3>
              <p className="text-gray-600 ">
                A dApp that empowers public and private institutions to
                authenticate, secure and manage their documents on the
                blockchain technology.
              </p>
            </div>
          </div>

          <div className="flex h-full hover:scale-105 hover:transition-all hover:duration-300 flex-col justify-between rounded-lg border border-gray-200 hover:bg-[#cfef00] bg-gray-200 p-6 shadow-sm transition-colors hover:border-gray-300  ">
            <div className="space-y-4">
              <Image
                src="/collection.png"
                alt="nft collection"
                width={400}
                height={400}
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold flex flex-row gap-2 items-center">
                NFT Minting Website{" "}
                <Link
                  href="https://github.com/SooF97/Collection"
                  target="_blank"
                >
                  <FaGithub className="text-gray-950 w-5 h-5" />
                </Link>
                <Link href="https://collectionn.netlify.app/" target="_blank">
                  <TbWorld className="text-gray-950 w-5 h-5" />
                </Link>
              </h3>
              <p className="text-gray-600 ">
                An NFT minting website that allow users to mint an amount of
                nfts from an nft collection.
              </p>
            </div>
          </div>

          <div className="flex h-full hover:scale-105 hover:transition-all hover:duration-300 flex-col justify-between rounded-lg border border-gray-200 hover:bg-[#cfef00] bg-gray-200 p-6 shadow-sm transition-colors hover:border-gray-300  ">
            <div className="space-y-4">
              <Image
                src="/digifti.png"
                alt="nft marketplace"
                width={400}
                height={400}
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold flex flex-row gap-2 items-center">
                Digital Product dApp{" "}
                <Link
                  href="https://github.com/SooF97/digital_product_dapp"
                  target="_blank"
                >
                  <FaGithub className="text-gray-950 w-5 h-5" />
                </Link>
                <Link
                  href="https://willowy-gelato-2fc8b2.netlify.app/"
                  target="_blank"
                >
                  <TbWorld className="text-gray-950 w-5 h-5" />
                </Link>
              </h3>
              <p className="text-gray-600 ">
                A dApp that allows digital products sellers to turn their items
                into NFTs.
              </p>
            </div>
          </div>
          <div className="flex h-full hover:scale-105 hover:transition-all hover:duration-300 flex-col justify-between rounded-lg border border-gray-200 hover:bg-[#cfef00] bg-gray-200 p-6 shadow-sm transition-colors hover:border-gray-300  ">
            <div className="space-y-4">
              <Image
                src="/rewartist.png"
                alt="AI web3 blockchain marketplace"
                width={400}
                height={400}
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold flex flex-row gap-2 items-center">
                Blockchain & AI application{" "}
                <Link
                  href="https://github.com/SooF97/R3WARTIST"
                  target="_blank"
                >
                  <FaGithub className="text-gray-950 w-5 h-5" />
                </Link>
                <Link href="https://r3-wartist.vercel.app/" target="_blank">
                  <TbWorld className="text-gray-950 w-5 h-5" />
                </Link>
              </h3>
              <p className="text-gray-600 ">
                A Blockchain-based Application aiming to fairly reward talented
                ai-gen image Artists
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-8 md:py-16 md:px-12">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl text-gray-100 font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to get started?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 text-sm md:text-md ">
                Unlock your business potential through innovative blockchain
                solutions. <br></br>Get in touch to learn more about my
                services.
              </p>
            </div>
            <Link href="/appointment">
              <button className="btn-2">
                <span>Book a Call</span>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 74 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="37"
                    cy="37"
                    r="35.5"
                    stroke="black"
                    strokeWidth="3"
                  ></circle>
                  <path
                    d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                    fill="black"
                  ></path>
                </svg>
              </button>
            </Link>
            <div className="flex flex-row items-center justify-center text-2xl text-gray-400 gap-3">
              <Link
                href="https://www.linkedin.com/in/soufiane-masad-2a8836286/"
                target="_blank"
              >
                <FaLinkedin className=" hover:scale-105 hover:text-[#cfef00]" />
              </Link>
              <Link href="https://twitter.com/soufien_msd" target="_blank">
                <FaTwitter className=" hover:scale-105 hover:text-[#cfef00]" />
              </Link>
              <Link href="https://www.facebook.com/souf.msd/" target="_blank">
                <FaFacebook className=" hover:scale-105 hover:text-[#cfef00]" />
              </Link>
              <Link
                href="https://www.instagram.com/soufien.msd/"
                target="_blank"
              >
                <FaInstagram className=" hover:scale-105 hover:text-[#cfef00]" />
              </Link>
              <Link href="https://github.com/SooF97" target="_blank">
                <FaGithub className=" hover:scale-105 hover:text-[#cfef00]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
