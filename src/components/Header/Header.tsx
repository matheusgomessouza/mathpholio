"use-client";
import Link from "next/link";

import { IoIosMail } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { menuLabels } from "@/variables/data";
import { MenuProps } from "@/types/interfaces";

export default function HeaderComponent() {
  return (
    <>
      <header className="flex w-full items-center justify-between gap-2 p-4 lg:hidden">
        <GiHamburgerMenu size={32} />
        <h1 className="cssanimation leFadeInRight sequence text-2xl">
          Mathpholio!
        </h1>
        <Link
          href="mailto:matheusg_souza@outlook.com"
          aria-label="Reach me out through here"
          target="_blank"
          className="flex h-10 items-center gap-1 rounded-lg bg-black p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
        >
          <IoIosMail size={24} fill="#ffff" />
        </Link>
      </header>

      <header className="fixed z-10 m-auto hidden w-full items-center justify-between bg-gradient-to-b px-8 pt-4 lg:flex">
        <h1 className="cssanimation leFadeInRight  sequence text-4xl">
          Mathpholio!
        </h1>
        <nav
          role="navigation"
          aria-label="Navigation Menu"
          className="ml-8 mr-auto flex items-center"
        >
          <ul className="flex justify-evenly">
            {menuLabels.map((item: MenuProps) => (
              <li className="mx-2 text-xl" key={item.id}>
                <a href={item.link} aria-label={`Go to section ${item.title}`}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="mailto:matheusg_souza@outlook.com"
          aria-label="Reach me out through here"
          target="_blank"
          className="flex h-10 items-center gap-1 rounded-lg bg-white p-2 px-8 drop-shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white"
        >
          Contact Me
          <IoIosMail size={24} />
        </Link>
      </header>
    </>
  );
}
