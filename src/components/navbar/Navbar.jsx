import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <nav
      id="top"
      className="w-full bg-white fixed top-0 left-0 right-0 z-10 shadow-md"
    >
      <div className="md:flex md:justify-between md:items-center md:w-[90%] md:mx-auto">
        <div className="flex justify-between items-center px-5 py-5">
          {/* logo */}
          <div>
            <Link href="/">
              <Image src="/logo.png" width={100} height={100} />
            </Link>
          </div>
          {/* hamburger menu btn */}
          <div className="md:hidden">
            <button onClick={() => setClick(!click)}>
              {click ? (
                <GrClose className="text-3xl" />
              ) : (
                <GiHamburgerMenu className="text-3xl" />
              )}
            </button>
          </div>
        </div>
        {/* links */}
        <div className={`${click ? "block" : "hidden"} md:block `}>
          <ul className="md:flex md:gap-6">
            <li className="text-center py-4 border-b-2 capitalize hover:text-gray-500 md:border-none">
              <Link
                href="#"
                onClick={() => setClick(!click)}
                className="text-2xl font-bold md:text-lg"
              >
                about
              </Link>
            </li>
            <li className="text-center py-4 border-b-2 capitalize hover:text-gray-500 md:border-none">
              <Link
                href="#"
                onClick={() => setClick(!click)}
                className="text-2xl font-bold md:text-lg"
              >
                skills
              </Link>
            </li>
            <li className="text-center py-4 border-b-2 capitalize hover:text-gray-500 md:border-none">
              <Link
                href="#"
                onClick={() => setClick(!click)}
                className="text-2xl font-bold md:text-lg"
              >
                projects
              </Link>
            </li>
            <li className="text-center py-4  capitalize hover:text-gray-500 md:border-none">
              <Link
                href="#"
                onClick={() => setClick(!click)}
                className="text-2xl font-bold md:text-lg"
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
