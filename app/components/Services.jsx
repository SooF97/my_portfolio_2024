import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Services() {
  return (
    <>
      <section className="w-full md:px-12 py-12 md:py-16">
        <div className=" px-4 md:px-6 text-center">
          <div className="flex flex-col justify-center items-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-100 tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              My services
            </h1>
            <p className=" text-gray-400 md:text-xl ">
              Discover how my comprehensive suite of services can help your
              business thrive.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-4 md:px-16 md:py-2">
        <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
          <div className="flex h-full flex-col justify-between rounded-lg border hover:bg-[#cfef00] border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-gray-300  ">
            <div className="space-y-4">
              <PieChartIcon className="h-10 w-10 text-gray-400 " />
              <h3 className="text-lg font-semibold">Tokenization</h3>
              <p className="text-gray-600">
                Define and develop a customized token to implement into your
                business. From digital tokenization to RWA Tokenization.
              </p>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between rounded-lg hover:bg-[#cfef00] border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-gray-300 ">
            <div className="space-y-4">
              <CogIcon className="h-10 w-10 text-gray-400 " />
              <h3 className="text-lg font-semibold">Blockchain Consulting</h3>
              <p className="text-gray-600 ">
                Get strategic guidance and advice to help your business achieve
                its goals through blockchain solutions.
              </p>
            </div>
          </div>

          <div className="flex h-full flex-col justify-between rounded-lg border hover:bg-[#cfef00] border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-gray-300 ">
            <div className="space-y-4">
              <LifeBuoyIcon className="h-10 w-10 text-gray-400 " />
              <h3 className="text-lg font-semibold">
                Smart Contracts Development
              </h3>
              <p className="text-gray-600">
                Create custom smart contracts to enhance your business
                processes.
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
}

function BoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CogIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  );
}

function LifeBuoyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m4.93 4.93 4.24 4.24" />
      <path d="m14.83 9.17 4.24-4.24" />
      <path d="m14.83 14.83 4.24 4.24" />
      <path d="m9.17 14.83-4.24 4.24" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function PieChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
