import Link from "next/link";
import { menuLabels, techs } from "@/variables/data";
import { MenuProps } from "@/types/interfaces";

import TypewriterComponent from "@/components/Typewriter/Typewriter";
import { ReorderComponent } from "@/components/Reorder/Reorder";

export default async function Home() {
  return (
    <>
      <header className="fixed z-10 m-auto flex w-full items-center justify-between bg-gradient-to-b px-8 pt-4">
        <h1 className="cssanimation leRainDrop sequence infinite text-4xl">
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
          href="https://www.linkedin.com/in/matheus-gomes-de-souza/?locale=en_US"
          aria-label="Reach me out through here"
          target="_blank"
          className="rounded-lg bg-white p-2 px-8 drop-shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white"
        >
          Contact Me
        </Link>
      </header>

      <main className="p-8">
        <div className="m-auto mt-8 flex flex-col">
          <section className="flex h-[850px] items-center justify-between gap-x-8">
            <article className=" flex flex-col items-center">
              <div className="mx-24 w-[800px]">
                <TypewriterComponent />
                <p className="text-justify text-base leading-6">
                  I am a highly skilled professional with a specialization in
                  front-end technologies, primarily working with the dynamic
                  Javascript stack, including React, Node.js, Next.js, and React
                  Native. Currently, I am in the exciting phase of transitioning
                  into a full-stack engineering role.
                </p>
                <div className="flex gap-4 pt-6">
                  <Link
                    aria-label="Hire my software development services"
                    href="mailto:matheusg_souza@outlook.com"
                    className="flex h-10 w-36 items-center justify-center rounded-lg bg-white p-2 px-8 drop-shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white"
                  >
                    Hire Me
                  </Link>
                  <Link
                    aria-label="Want a sneaky pick?"
                    href={`https://www.linkedin.com/in/matheus-gomes-de-souza/?locale=en_US`}
                    target="_blank"
                    className="flex h-10 w-36 items-center justify-center rounded-lg bg-white p-2 px-8 drop-shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </article>
            {/** Still in progress */}
            <aside className="flex items-center justify-center"></aside>
          </section>
          <section id="skills" className="my-20 flex w-full gap-8">
            <ReorderComponent data={techs} />
          </section>
        </div>
      </main>
      <footer className="fixed bottom-0 w-full bg-zinc-900 px-4 py-1 text-end text-color-six">
        <p>
          Mathpholio™️, Copyright © {new Date().getFullYear()} by Matheus Souza
        </p>
      </footer>
    </>
  );
}
