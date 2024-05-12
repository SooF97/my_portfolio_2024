import Image from "next/image";
import Link from "next/link";

import localFont from "next/font/local";

const myFont2 = localFont({ src: "../soul_sig.ttf" });

export default function Hero() {
  return (
    <section className="w-full md:bg-hero md:bg-center md:bg-no-repeat md:bg-cover md:px-8 py-12 md:py-8 ">
      <div className="px-4 md:px-12">
        <div className="grid content-center gap-10 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <div className="flex flex-col justify-center px-6 space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm ">
                Hello👋, I am Soufiane MASAD
              </div>
              <h1 className="text-2xl font-extrabold text-gray-100 tracking-tighter sm:text-4xl xl:text-4xl/none">
                Founder{" "}
                <Link
                  href="https://www.oklever.com"
                  target="_blank"
                  className="underline text-[#cfef00] font-extrabold "
                >
                  @Oklever
                </Link>{" "}
                <br></br>& Blockchain Developer
              </h1>
              <p className="max-w-[600px] text-gray-400 md:text-xl dark:text-gray-400">
                I help Businesses integrate the decentralized world through
                innovative Blockchain solutions.<br></br> Let's build the future
                together! 🌐
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row ">
              <button className="animated-button ">
                <svg
                  viewBox="0 0 24 24"
                  className="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">
                  <Link href="/contact">Contact me</Link>
                </span>
                <span className="circle"></span>
                <svg
                  viewBox="0 0 24 24"
                  className="arr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </div>
          </div>
          <Image
            alt="blockchain developer"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-contain w-full sm:w-full lg:order-last"
            width={100}
            height={100}
            src="/kok.svg"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
