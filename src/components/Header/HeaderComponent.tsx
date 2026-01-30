"use client";
import Link from "next/link";
import { useState } from "react";

import { IoIosMail, IoIosClose } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { SiNotion } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { menuLabels } from "@/variables/data";
import { MenuProps } from "@/types/interfaces";

export default function HeaderComponent() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  return (
    <>
      <header className="mobile sticky top-0 z-50 flex w-full items-center justify-between gap-2 border-b border-color-two bg-color-seven/90 p-4 backdrop-blur lg:hidden">
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
          className="rounded-md p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
        >
          <GiHamburgerMenu size={32} />
        </button>
        {toggleMobileMenu && (
          <div className="absolute left-0 top-0 z-50 h-screen w-full bg-color-seven/95 p-4 lg:hidden">
            <nav
              role="navigation"
              aria-label="Navigation Menu"
              className="relative flex items-center"
            >
              <ul className="mt-2 flex flex-col justify-evenly gap-4">
                {menuLabels.map((item: MenuProps) => (
                  <li
                    className="text-xl text-color-six"
                    key={item.id}
                    onClick={() => setToggleMobileMenu(false)}
                  >
                    <Link
                      href={item.link ?? ""}
                      aria-label={`Go to section ${item.title}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                aria-label="Close navigation"
                className="absolute right-0 top-0 rounded-md p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                onClick={() => setToggleMobileMenu(false)}
              >
                <IoIosClose size={40} fill="#ffff" />
              </button>
            </nav>
          </div>
        )}
        <h1 className="text-2xl">
          <Link href="#" className="cssanimation leFadeInRight sequence">
            Mathpholio!
          </Link>
        </h1>
        <Link
          href="mailto:matheuscoworking@outlook.com"
          aria-label="Reach me out through here"
          target="_blank"
          className="flex h-10 items-center gap-1 rounded-lg bg-color-five p-2 text-white shadow-sm transition hover:bg-color-four focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
        >
          <IoIosMail size={24} />
        </Link>
      </header>

      <header className="desktop fixed top-0 z-50 hidden w-full items-center justify-center px-6 py-5 lg:flex">
        <div className="flex w-full max-w-5xl items-center justify-between rounded-3xl border border-color-two bg-color-four/70 px-6 py-3.5 shadow-md backdrop-blur">
          <h1 className="text-base font-bold text-color-eight">
            <Link href="#" className="cssanimation leFadeInRight sequence">
              Mathpholio!
            </Link>
          </h1>
          <nav role="navigation" aria-label="Navigation Menu">
            <ul className="flex items-center gap-7">
              {menuLabels.map((item: MenuProps) => (
                <li className="text-sm font-medium" key={item.id}>
                  <Link
                    className="nav text-color-one transition hover:text-color-eight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                    href={item.link ?? ""}
                    aria-label={`Go to section ${item.title}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="https://www.linkedin.com/in/matheus-gomes-de-souza"
              target="_blank"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-color-two bg-color-five text-color-eight shadow-sm transition hover:bg-color-four focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              <FaLinkedin size={14} />
            </Link>
            <Link
              href="https://matheus-docs.notion.site/d1ebd3fda2d040e4810cc0e6447cf17b"
              target="_blank"
              aria-label="Notion"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-color-two bg-color-five text-color-eight shadow-sm transition hover:bg-color-four focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              <SiNotion size={14} />
            </Link>
            <Link
              href="https://www.github.com/matheusgomessouza"
              target="_blank"
              aria-label="GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-color-two bg-color-five text-color-eight shadow-sm transition hover:bg-color-four focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              <ImGithub size={14} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
