import Link from "next/link";
import Image from "next/image";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";

import { techs, services } from "@/variables/data";
import * as interfaces from "@/types/interfaces";
import HeaderComponent from "@/components/Header/Header";
import myPicture from "../../public/assets/main-circle.png";
import TypewriterComponent from "@/components/Typewriter/Typewriter";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <main className="p-8 pb-16 xl:px-[9%]">
        <div className="m-auto mt-8 flex flex-col">
          <section className="relative flex flex-col-reverse items-center xl:h-screen xl:flex-row">
            <article className="flex w-1/2 flex-col items-center">
              <div className="sm:w-full">
                <TypewriterComponent />
                <p className="text-center text-base leading-6 lg:text-left 2xl:w-9/12 2xl:text-left">
                  I am a highly skilled professional with a specialization in
                  front-end technologies, primarily working with the dynamic
                  Javascript stack, including <strong>React</strong>,{" "}
                  <strong>Node.js</strong>, <strong>Next.js</strong>, and{" "}
                  <strong>React Native</strong>. Currently, in the exciting
                  phase of transitioning into a full-stack engineering role.
                </p>
                <div className="flex gap-4 pt-6">
                  <Link
                    aria-label="Check out my LinkedIn page"
                    target="_blank"
                    href="https://www.linkedin.com/in/matheus-gomes-de-souza/?locale=en_US"
                    className=" flex h-10 w-36 items-center justify-center gap-1 rounded-xl bg-black p-2 px-8 text-white drop-shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 dark:border dark:border-solid dark:bg-white dark:text-black"
                  >
                    LinkedIn
                    <FaLinkedin />
                  </Link>
                  <Link
                    aria-label="Check out my Github page"
                    href={`https://www.github.com/matheusgomessouza`}
                    target="_blank"
                    className="flex h-10 w-36 items-center justify-center gap-1  rounded-xl bg-black p-2 px-8 text-white drop-shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 dark:border dark:border-solid dark:bg-white dark:text-black"
                  >
                    Github
                    <ImGithub />
                  </Link>
                </div>
              </div>
            </article>
            <aside className="flex items-center justify-center lg:w-1/2">
              <div className="relative flex h-auto w-screen items-center justify-center xl:h-auto xl:w-auto">
                <Image
                  priority={true}
                  src={myPicture}
                  width={900}
                  height={700}
                  sizes=""
                  alt="A person with a long beard, serious expression"
                  className="relative z-[2] brightness-100 invert dark:invert-0 lg:w-[35vw] xl:w-[45vw]"
                />
              </div>
            </aside>
          </section>
          <div id="skills" className="h-8 lg:h-32" />

          <section className="mt-12">
            <p className="text-2xl">Tech Skills</p>
            <h2 className="lg:mb-12">
              Building the highest quality application with the following
              technologies
            </h2>
            {/* Mobile */}
            {techs.map((item: interfaces.TechSkills, index) => {
              if (index % 2 === 0) {
                return (
                  <div
                    key={item.title}
                    className="-ml-8 mt-8 flex h-52 w-[90vw] items-center rounded-r-[30px] bg-black p-4 dark:bg-white lg:hidden"
                  >
                    <article className="flex gap-4">
                      <div className="flex flex-col items-center justify-center text-center">
                        <h2 className="pb-4 text-white dark:text-black">
                          {item.title}
                        </h2>
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={300}
                          height={300}
                          className=" grayscale invert dark:invert-0"
                        />
                      </div>
                      <div className="flex items-center">
                        <p className="w-[90%] text-sm text-white dark:text-black">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </div>
                );
              } else {
                return (
                  <div
                    key={item.title}
                    className="ml-[0.7rem] mt-8 flex h-52 w-[90vw] items-center rounded-l-[30px] bg-black p-4 dark:bg-white lg:hidden"
                  >
                    <article className="flex flex-row-reverse gap-2">
                      <div className="flex flex-col items-center justify-center text-center">
                        <h2 className="pb-4 text-white dark:text-black">
                          {item.title}
                        </h2>
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={300}
                          height={300}
                          className="invert dark:invert-0"
                        />
                      </div>
                      <div className="flex items-center justify-center">
                        <p className="w-[90%] text-right text-sm text-white dark:text-black">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </div>
                );
              }
            })}

            <section className="hidden gap-10 lg:flex">
              {techs.map((item: interfaces.TechSkills) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center justify-center gap-4 text-center"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="dark:invert"
                  />
                  <p className="pb-4 text-black dark:text-white">
                    {item.title}
                  </p>
                </div>
              ))}
            </section>

            <p
              id="services"
              className="mt-12 text-center text-2xl lg:text-left"
            >
              My Services
            </p>
            <h2 className="mb-12 text-center lg:text-left">
              Developing to all major types of projects scopes
            </h2>
            <section className="flex w-full flex-col justify-between gap-10 lg:mt-10 lg:flex lg:flex-row">
              {services.map((item: interfaces.Services) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center gap-8 rounded-3xl border border-solid border-white bg-black p-8 dark:bg-white"
                >
                  <p className="text-2xl text-white dark:text-black">
                    {item.title}
                  </p>
                  <Image
                    alt={item.title}
                    src={item.icon}
                    width={600}
                    height={600}
                    className="dark:invert"
                  />
                </div>
              ))}
            </section>
            <div id="work-experience" className="h-2 lg:h-32" />
            <p id="services" className="mt-12 text-2xl">
              Work experiences
            </p>
            <h2>Working on small to great scale projects</h2>
          </section>
        </div>
      </main>
      <footer className="fixed bottom-0 w-full bg-black px-4 py-1 text-center text-color-six lg:relative lg:text-end">
        <p>Mathpholio™️, Copyright © 2024 by Matheus Souza</p>
      </footer>
    </>
  );
}
