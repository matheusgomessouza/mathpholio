"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

import { IoIosMail, IoIosClose } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { SiNotion } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { menuLabels } from "@/variables/data";
import { MenuProps } from "@/types/interfaces";

export default function HeaderComponent() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const [activeTabId, setActiveTabId] = useState(menuLabels[0]?.id ?? 0);

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
        <AnimatePresence>
          {toggleMobileMenu ? (
            <motion.div
              className="absolute left-0 top-0 z-50 h-screen w-full bg-color-seven/90 p-4 backdrop-blur lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.nav
                role="navigation"
                aria-label="Navigation Menu"
                className="relative mx-auto flex h-full max-w-md flex-col rounded-3xl border border-color-two bg-color-four/60 p-6 shadow-xl"
                initial={{ y: -8, scale: 0.98 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: -8, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-color-eight">
                    Menu
                  </h2>
                  <button
                    type="button"
                    aria-label="Close navigation"
                    className="rounded-md p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                    onClick={() => setToggleMobileMenu(false)}
                  >
                    <IoIosClose size={36} fill="#ffff" />
                  </button>
                </div>
                <motion.ul
                  className="mt-2 flex flex-1 flex-col gap-3"
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: { staggerChildren: 0.06, delayChildren: 0.1 },
                    },
                  }}
                >
                  {menuLabels.map((item: MenuProps) => (
                    <motion.li
                      key={item.id}
                      variants={{
                        hidden: { opacity: 0, x: -12 },
                        show: { opacity: 1, x: 0 },
                      }}
                    >
                      <Link
                        href={item.link ?? ""}
                        aria-label={`Go to section ${item.title}`}
                        onClick={() => setToggleMobileMenu(false)}
                        className="flex items-center justify-between rounded-2xl border border-color-two bg-color-five/50 px-4 py-3 text-lg font-medium text-color-eight transition hover:bg-color-four focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                      >
                        {item.title}
                        <span className="text-color-one">→</span>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-color-two bg-color-five/40 px-4 py-3 text-xs text-color-one">
                  <span>Let’s build something great.</span>
                  <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_12px_rgba(34,197,94,0.7)]" />
                </div>
              </motion.nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
        <h1 className="text-base font-bold text-color-eight">
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
            <LayoutGroup>
              <ul className="flex items-center gap-2">
                {menuLabels.map((item: MenuProps) => (
                  <li className="relative" key={item.id}>
                    {activeTabId === item.id ? (
                      <motion.span
                        layoutId="header-tabs-indicator"
                        className="absolute inset-0 rounded-full bg-color-two/60"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                        aria-hidden
                      />
                    ) : null}
                    <Link
                      className={`nav relative z-10 rounded-full px-3 py-1.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ${
                        activeTabId === item.id
                          ? "text-color-eight"
                          : "text-color-one hover:text-color-eight"
                      }`}
                      href={item.link ?? ""}
                      aria-label={`Go to section ${item.title}`}
                      aria-current={
                        activeTabId === item.id ? "page" : undefined
                      }
                      onClick={() => setActiveTabId(item.id)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </LayoutGroup>
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
