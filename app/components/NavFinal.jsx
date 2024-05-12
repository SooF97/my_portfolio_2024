import { Button } from "@/app/components/ui/buttonn";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

export default function NavFinal() {
  return (
    <header className="flex h-20 w-full items-center justify-between px-4 md:px-6">
      <Link className="flex items-center gap-2" href="/">
        <Image
          src="/sfn.svg"
          alt="blockchain developer"
          width={50}
          height={50}
          className=" rounded-full "
        />
        <span className="text-lg text-gray-100 font-semibold">Soufiane</span>
      </Link>
      <nav className="hidden text-gray-100 lg:flex">
        <ul className="flex items-center gap-6">
          <li>
            <Link
              className="text-sm font-medium transition-colors hover:text-gray-900 focus:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 dark:focus:text-gray-50"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-sm font-medium transition-colors hover:text-gray-900 focus:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 dark:focus:text-gray-50"
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-sm font-medium transition-colors hover:text-gray-900 focus:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 dark:focus:text-gray-50"
              href="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="text-sm font-medium transition-colors hover:text-gray-900 focus:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 dark:focus:text-gray-50"
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="rounded-full text-gray-100"
              size="icon"
              variant="outline"
            >
              <MenuIcon className=" h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-6 p-6">
              <Link
                className="flex items-center gap-2 text-lg font-semibold"
                href="/"
              >
                <Image
                  src="/sfn.svg"
                  alt="blockchain developer"
                  width={40}
                  height={40}
                  className=" rounded-full "
                />
                <span className="text-gray-100">Soufiane</span>
              </Link>
              <nav className="text-gray-100 grid gap-4">
                <Link
                  className="text-sm font-medium transition-colors hover:text-gray-900 focus:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 dark:focus:text-gray-50"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="text-sm font-medium transition-colors hover:text-gray-900 focus:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 dark:focus:text-gray-50"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="text-sm font-medium transition-colors hover:text-gray-900 focus:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 dark:focus:text-gray-50"
                  href="/portfolio"
                >
                  Portfolio
                </Link>
                <Link
                  className="text-sm font-medium transition-colors hover:text-gray-900 focus:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 dark:focus:text-gray-50"
                  href="/contact"
                >
                  Contact
                </Link>
              </nav>
              <Button>Get Started</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <Button className="hidden lg:inline-flex">Get Started</Button>
    </header>
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
