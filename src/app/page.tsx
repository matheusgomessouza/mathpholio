import Link from "next/link";
import Image from "next/image";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";

import { techs, services } from "@/variables/data";
import * as interfaces from "@/types/interfaces";
import HeaderComponent from "@/components/Header/Header";
import myPicture from "../../public/assets/main-circle.png";
import TypewriterComponent from "@/components/Typewriter/Typewriter";

const isLastTechsItem = (item: number, length: number) => {
  if (item === length - 1) return true;
  return false;
};

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <main className="p-8 pb-16 xl:px-[9%]">
        <div className="m-auto flex flex-col lg:mt-8">
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
                    className="flex h-10 w-36 items-center justify-center gap-1 rounded-xl bg-black p-2 px-8 text-white drop-shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-solid dark:bg-color-four dark:text-white"
                  >
                    LinkedIn
                    <FaLinkedin />
                  </Link>
                  <Link
                    aria-label="Check out my Github page"
                    href={`https://www.github.com/matheusgomessouza`}
                    target="_blank"
                    className="flex h-10 w-36 items-center justify-center gap-1  rounded-xl bg-black p-2 px-8 text-white drop-shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 dark:bg-color-four dark:text-white"
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

            <section className="hidden justify-between gap-8 before:absolute before:left-0 before:z-10 before:h-80 before:w-screen before:bg-black before:content-[''] before:dark:bg-color-four lg:flex lg:items-center 2xl:gap-20">
              <article className="z-20 text-white">
                <h2 className="mb-6 w-4 text-2xl">
                  Revolutionizing Development
                </h2>
                <p className="w-72 lg:mb-12">
                  Unleashing the power of ReactJS, React Native, Node.js,
                  Next.js, Expo, Jest, Git, and TypeScript for efficiency,
                  scalability, and innovation in software development.
                </p>
              </article>
              {techs.map((item: interfaces.TechSkills, index) => (
                <aside
                  key={item.title}
                  className="z-20 flex flex-col items-center justify-center gap-4 text-center"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={100}
                    height={100}
                    className={
                      isLastTechsItem(index, techs.length)
                        ? undefined
                        : "invert dark:invert"
                    }
                  />
                  <h3 className="pb-4 text-white lg:text-sm">{item.title}</h3>
                </aside>
              ))}
            </section>

            <section className="flex w-full flex-col justify-between gap-10 lg:mt-40 lg:flex lg:flex-row lg:items-center">
              <article>
                <h2
                  id="services"
                  className="mx-auto mb-8 w-64 text-center text-2xl lg:mx-0 lg:mt-44 lg:text-left"
                >
                  Software Solutions for Every Challenge
                </h2>
                <p className="mb-12 hidden text-center lg:flex lg:text-left">
                  Full-stack developer with expertise in web, mobile, and
                  backend development. I create user-friendly websites and
                  intuitive mobile apps while ensuring scalable and robust
                  backend systems.
                </p>
              </article>
              <div className="w-full">
                <swiper-container
                  speed={500}
                  loop
                  spaceBetween={24}
                  slidesPerView="auto"
                  draggable
                  direction="horizontal"
                  updateOnWindowResize
                >
                  {services.map((item: interfaces.Services) => (
                    <swiper-slide
                      key={item.id}
                      className="w-4/5 max-w-xs odd:w-2/5 even:w-3/5"
                    >
                      <aside className="flex h-auto w-[350px] flex-col items-center gap-8 rounded-3xl bg-black p-10 dark:bg-color-four">
                        <Image
                          alt={item.title}
                          src={item.icon}
                          width={108}
                          height={108}
                        />
                        <h3 className="text-2xl text-white">{item.title}</h3>
                        <p className="text-center text-white">
                          {item.description}
                        </p>
                      </aside>
                    </swiper-slide>
                  ))}
                </swiper-container>
              </div>
            </section>
            <div id="work-experience" className="h-2 lg:h-32" />
            <p className="mt-12 text-2xl">Work experiences</p>
            <h2>Working on small to great scale projects</h2>
          </section>
        </div>
      </main>
      <footer className="fixed bottom-0 w-full bg-black px-4 py-1 text-center text-color-six dark:bg-color-four lg:relative lg:text-end">
        <p className="text-white dark:text-white">
          Mathpholio™️, Copyright © 2024 by Matheus Souza
        </p>
      </footer>
    </>
  );
}
