"use client";
import Link from "next/link";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";

import Contact from "../components/Contact";

const page = () => {
  return (
    <>
      <section className="w-full md:px-12 py-8 md:py-12">
        <div className=" px-4 md:px-6 text-center">
          <div className="flex flex-col justify-center items-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-100 tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Get in Touch
            </h1>
            <p className=" text-gray-400 md:text-xl dark:text-gray-400">
              Let's Connect: Reach Out and Explore Opportunities Together!
            </p>
            <div className="flex flex-row items-center gap-3">
              <Link
                href="https://wa.me/212708300546?text=Hello%2C%20i%20have%20a%20question%20about%20your%20service.%20Can%20you%20help%20me%3F"
                target="_blank"
              >
                <FaWhatsappSquare className="text-gray-200 hover:text-[#cfef00] w-8 h-8" />
              </Link>
              <Link href="mailto:soufiane@oklever.com" target="_blank">
                <IoMdMailUnread className="text-gray-200 hover:text-[#cfef00] w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default page;
