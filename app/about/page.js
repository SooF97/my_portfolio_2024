import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { MdBusinessCenter, MdCastForEducation } from "react-icons/md";
import { RiNftFill } from "react-icons/ri";
import {
  SiEthereum,
  SiEthers,
  SiFreelancer,
  SiHiveBlockchain,
  SiIpfs,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenzeppelin,
  SiReact,
  SiSolidity,
} from "react-icons/si";

import Link from "next/link";

import {
  FaFacebook,
  FaGithub,
  FaHardHat,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const About = () => {
  return (
    <>
      <section className="w-full md:px-12 py-12 md:py-16">
        <div className=" px-4 md:px-6 text-center">
          <div className="flex flex-col justify-center items-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-100 tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              My journey so far
            </h1>
            <p className=" text-gray-400 md:text-xl dark:text-gray-400">
              From learning the basics of Distributed Ledger Technology to
              crafting blockchain-based applications.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-8 md:px-16 md:py-2 mb-8">
        <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
          <div className="flex h-full flex-col justify-between rounded-lg border border-gray-200 hover:bg-[#cfef00] bg-white p-6 shadow-sm transition-colors hover:border-gray-300  ">
            <div className="space-y-4">
              <MdCastForEducation className="h-10 w-10 text-gray-500 " />
              <span>2013-2016</span>
              <h3 className="text-lg font-semibold">
                Mathematical Science Baccalaureate
              </h3>
              <p className="text-gray-600 ">
                It shaped my learning journey with a solid foundation in
                mathematical principles and problem-solving skills.
              </p>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between rounded-lg border hover:bg-[#cfef00] border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-gray-300 ">
            <div className="space-y-4">
              <GiGraduateCap className="h-10 w-10 text-gray-500 " />
              <span>2016-2021</span>
              <h3 className="text-lg font-semibold">Civil Engineer</h3>
              <p className="text-gray-600 ">
                Upon graduating as a civil engineer, I found my curiosity piqued
                by the world of blockchain, leading me to explore its disruptive
                potential and innovative applications
              </p>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between rounded-lg border hover:bg-[#cfef00] border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-gray-300 ">
            <div className="space-y-4">
              <SiHiveBlockchain className="h-10 w-10 text-gray-500 " />
              <span>2020-2022</span>
              <h3 className="text-lg font-semibold">Blockchain Learning</h3>
              <p className="text-gray-600 ">
                Through{" "}
                <Link href="https://www.alchemy.com/university" target="_blank">
                  <span className="text-blue-600	 underline ">
                    Alchemy University
                  </span>
                </Link>
                , active participation in{" "}
                <Link href="https://www.encode.club/" target="_blank">
                  <span className="text-blue-600	underline ">Bootcamps</span>
                </Link>{" "}
                , and strategic use of{" "}
                <Link href="https://www.useweb3.xyz/" target="_blank">
                  <span className="text-blue-600	underline ">resources</span>
                </Link>{" "}
                have been pivotal in honing my expertise.
              </p>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between rounded-lg border hover:bg-[#cfef00] border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-gray-300 ">
            <div className="space-y-4">
              <SiFreelancer className="h-10 w-10 text-gray-500 " />
              <span>2022-2023</span>
              <h3 className="text-lg font-semibold">
                Blockchain and Web 3.0 Developer
              </h3>
              <p className="text-gray-600">
                Freelancing as a Blockchain and Web 3.0 Developer empowers me to
                leverage my expertise flexibly, contributing to diverse projects
                and staying at the forefront of innovation in decentralized
                technologies.
              </p>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between rounded-lg border hover:bg-[#cfef00] border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-gray-300 ">
            <div className="space-y-4">
              <GrTechnology className="h-10 w-10 text-gray-500 " />
              <span>Mid-2023</span>
              <h3 className="text-lg font-semibold">
                Head Of Blockchain Development
              </h3>
              <p className="text-gray-600">
                Leading Blockchain Development at both{" "}
                <Link href="https://mediassive.com" target="_blank">
                  <span className="text-blue-600	underline ">Mediassive</span>
                </Link>{" "}
                and{" "}
                <Link href="https://marketmedia.ma" target="_blank">
                  <span className="text-blue-600	underline ">Marketmedia</span>
                </Link>{" "}
                honed my skillsets by providing hands-on experience in managing
                diverse projects and collaborating with multidisciplinary teams.
              </p>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between rounded-lg border hover:bg-[#cfef00] border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-gray-300 ">
            <div className="space-y-4">
              <MdBusinessCenter className="h-10 w-10 text-gray-500 " />
              <span>2023-2024</span>
              <h3 className="text-lg font-semibold">Oklever Agency</h3>
              <p className="text-gray-600">
                As a Blockchain Developer, I founded{" "}
                <Link href="https://oklever.com" target="_blank">
                  <span className="text-blue-600	underline ">Oklever</span>
                </Link>
                , a specialized digital agency committed to delivering
                blockchain solutions tailored to meet the unique needs of
                businesses and organizations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full md:px-12 py-8 md:py-16">
        <div className=" px-4 md:px-6 text-center">
          <div className="flex flex-col justify-center items-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-100 tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              My Tech stack
            </h1>
            <p className=" text-gray-400 md:w-1/2 md:text-xl dark:text-gray-400">
              Explore my tech stack as a blockchain developer leveraging
              languages like Solidity, frameworks including Truffle, Hardhat and
              Foundry, tools such as Web3.js and Ethers.js, to engineer
              decentralized applications and smart contracts on top of any
              EVM-Compatible blockchain.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-4 mb-2 md:mb-12 ">
        <div className="mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            <div className="flex flex-col items-center gap-2">
              <Link
                href="https://soliditylang.org/"
                target="_blank hover:text-[#cfef00]"
              >
                <SiSolidity className="h-10 w-10 text-gray-200 hover:text-[#cfef00] " />
              </Link>
              <span className="text-sm font-medium text-gray-300 hover:text-[#cfef00] ">
                <Link
                  href="https://soliditylang.org/"
                  target="_blank hover:text-[#cfef00]"
                >
                  Solidity
                </Link>
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Link href="https://ethereum.org/en/" target="_blank">
                <SiEthereum className="h-10 w-10 text-gray-200 hover:text-[#cfef00] " />
              </Link>
              <span className="text-sm font-medium text-gray-300 hover:text-[#cfef00]">
                <Link href="https://ethereum.org/en/" target="_blank">
                  Ethereum
                </Link>
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Link href="https://hardhat.org/" target="_blank">
                <FaHardHat className="h-10 w-10 text-gray-200 hover:text-[#cfef00] " />
              </Link>
              <span className="text-sm font-medium text-gray-300  hover:text-[#cfef00]">
                <Link href="https://hardhat.org/" target="_blank">
                  Hardhat
                </Link>
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Link href="https://docs.ethers.org/v5/" target="_blank">
                <SiEthers className="h-10 w-10 text-gray-200 hover:text-[#cfef00] " />{" "}
              </Link>
              <span className="text-sm font-medium text-gray-300 hover:text-[#cfef00]">
                <Link href="https://docs.ethers.org/v5/" target="_blank">
                  Ethers.js
                </Link>
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
              >
                {" "}
                <SiJavascript className="h-10 w-10 text-gray-200 hover:text-[#cfef00] " />
              </Link>
              <span className="text-sm font-medium text-gray-300 hover:text-[#cfef00]">
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                >
                  JavaScript
                </Link>
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Link href="https://react.dev/" target="_blank">
                <SiReact className="h-10 w-10 text-gray-200 hover:text-[#cfef00] " />
              </Link>
              <span className="text-sm font-medium text-gray-300 hover:text-[#cfef00]">
                <Link href="https://react.dev/" target="_blank">
                  React.js
                </Link>
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Link href="https://nextjs.org/" target="_blank">
                <SiNextdotjs className="h-10 w-10 text-gray-200 hover:text-[#cfef00] " />{" "}
              </Link>
              <span className="text-sm font-medium text-gray-300 hover:text-[#cfef00]">
                <Link href="https://nextjs.org/" target="_blank">
                  Next.js
                </Link>
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Link href="https://nodejs.org/en" target="_blank">
                <SiNodedotjs className="h-10 w-10 text-gray-200 hover:text-[#cfef00] " />
              </Link>
              <span className="text-sm font-medium text-gray-300 hover:text-[#cfef00]">
                <Link href="https://nodejs.org/en" target="_blank">
                  Node.js
                </Link>
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Link href="https://ipfs.tech/" target="_blank">
                <SiIpfs className="h-10 w-10 text-gray-200 hover:text-[#cfef00] " />{" "}
              </Link>
              <span className="text-sm font-medium text-gray-300 hover:text-[#cfef00]">
                <Link href="https://ipfs.tech/" target="_blank">
                  IPFS
                </Link>
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Link href="https://www.openzeppelin.com/" target="_blank">
                {" "}
                <SiOpenzeppelin className="h-10 w-10 text-gray-200 hover:text-[#cfef00] " />
              </Link>
              <span className="text-sm font-medium text-gray-300 hover:text-[#cfef00]">
                <Link href="https://www.openzeppelin.com/" target="_blank">
                  Openzeppelin
                </Link>
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RiNftFill className="h-10 w-10 text-gray-200 hover:text-[#cfef00] " />
              <span className="text-sm font-medium text-gray-300 hover:text-[#cfef00]">
                NFT Development
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BsFillFileEarmarkCodeFill className="h-10 w-10 text-gray-200 hover:text-[#cfef00] " />
              <span className="text-sm font-medium text-gray-300 hover:text-[#cfef00]">
                Smart Contracts
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-8 md:py-8 md:px-12">
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

export default About;
