import Link from "next/link";
import { ImGithub } from "react-icons/im";
import { techs } from "@/variables/data";
import { FaLinkedin } from "react-icons/fa";

import TypewriterComponent from "@/components/Typewriter/Typewriter";
import { ReorderComponent } from "@/components/Reorder/Reorder";
import HeaderComponent from "@/components/Header/Header";

export default async function Home() {
  return (
    <>
      <HeaderComponent />
      <main className="p-8">
        <div className="m-auto mt-8 flex flex-col">
          <section className="flex items-center justify-between gap-x-8 lg:h-[850px]">
            <article className=" flex flex-col items-center">
              <div className="lg:mx-24 lg:w-[800px]">
                <TypewriterComponent />
                <p className="text-center text-base leading-6 lg:text-justify">
                  I am a highly skilled professional with a specialization in
                  front-end technologies, primarily working with the dynamic
                  Javascript stack, including React, Node.js, Next.js, and React
                  Native. Currently, I am in the exciting phase of transitioning
                  into a full-stack engineering role.
                </p>
                <div className="flex gap-4 pt-6">
                  <Link
                    aria-label="Check out my LinkedIn page"
                    target="_blank"
                    href="https://www.linkedin.com/in/matheus-gomes-de-souza/?locale=en_US"
                    className="flex h-10 w-36 items-center justify-center gap-1 rounded-lg bg-white p-2 px-8 drop-shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white"
                  >
                    LinkedIn
                    <FaLinkedin />
                  </Link>
                  <Link
                    aria-label="Check out my Github page"
                    href={`https://www.github.com/matheusgomessouza`}
                    target="_blank"
                    className="flex h-10 w-36 items-center justify-center gap-1 rounded-lg bg-white p-2 px-8 drop-shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white"
                  >
                    Github
                    <ImGithub />
                  </Link>
                </div>
              </div>
            </article>
            {/** Still in progress */}
            <aside className="flex items-center justify-center"></aside>
          </section>
          <section id="skills" className="my-20 block w-full gap-8">
            <p>Tech skills</p>
            <h2>
              Building the highest quality application with the following
              technologies
            </h2>
            <ReorderComponent data={techs} />
          </section>
        </div>
      </main>
      <footer className="fixed bottom-0 w-full bg-zinc-900 px-4 py-1 text-center text-color-six lg:text-end">
        <p>
          Mathpholio™️, Copyright © {new Date().getFullYear()} by Matheus Souza
        </p>
      </footer>
    </>
  );
}
