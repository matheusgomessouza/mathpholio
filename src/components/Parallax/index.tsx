"use client";

import Image from "next/image";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

import myPicture from "../../../public/assets/main-circle.png";
import TypewriterComponent from "@/components/Typewriter/Typewriter";
import Link from "next/link";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";

export default function ParallaxComponent() {
  return (
    <section className="relative flex flex-col-reverse items-center xl:h-screen xl:flex-row">
      <div className="first absolute right-1/4 top-0 -mt-16 hidden h-40 w-80 rounded-b-full bg-black xl:block" />
      <article className="flex w-1/2 flex-col items-center">
        <div className="xl:mx-24 xl:w-[800px]">
          <TypewriterComponent />
          <p className="text-center text-base leading-6 xl:text-justify">
            I am a highly skilled professional with a specialization in
            front-end technologies, primarily working with the dynamic
            Javascript stack, including React, Node.js, Next.js, and React
            Native. Currently, I am in the exciting phase of transitioning into
            a full-stack engineering role.
          </p>
          <div className="flex gap-4 pt-6">
            <Link
              aria-label="Check out my LinkedIn page"
              target="_blank"
              href="https://www.linkedin.com/in/matheus-gomes-de-souza/?locale=en_US"
              className="flex h-10 w-36 items-center justify-center gap-1 rounded-xl bg-white p-2 px-8 drop-shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white"
            >
              LinkedIn
              <FaLinkedin />
            </Link>
            <Link
              aria-label="Check out my Github page"
              href={`https://www.github.com/matheusgomessouza`}
              target="_blank"
              className="flex h-10 w-36 items-center justify-center gap-1 rounded-xl bg-white p-2 px-8 drop-shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white"
            >
              Github
              <ImGithub />
            </Link>
          </div>
        </div>
      </article>

      <div className="one absolute right-0 top-0 -mr-8 h-32 w-16 rounded-l-full bg-black xl:block xl:h-96 xl:w-48" />
      <Parallax speed={5}>
        <div className="three absolute bottom-80 left-32 hidden h-64 w-64 rounded-full bg-black lg:bottom-28 lg:left-0 xl:block" />
      </Parallax>
      <Parallax speed={-5}>
        <div className="four absolute left-48 top-72 hidden h-16 w-16 rounded-full bg-black xl:block" />
      </Parallax>
      <Parallax speed={-5}>
        <div className="five absolute hidden h-24 w-48 rounded-b-full bg-black xl:top-24 xl:block xl:h-48 xl:w-48 xl:rounded-full" />
      </Parallax>
      <aside className="flex w-1/2 items-center justify-center">
        <Parallax speed={-1}>
          <div className="relative flex h-auto w-screen items-center justify-center before:absolute before:z-[1] before:h-auto before:w-screen before:rounded-full before:bg-black before:content-[''] xl:h-[900px] xl:w-[900px]">
            <Image
              priority={true}
              src={myPicture}
              width={900}
              height={700}
              sizes=""
              alt="A person with a long beard, serious expression"
              className="relative z-[2] w-[85vw] lg:w-[35vw]"
            />
          </div>
        </Parallax>
      </aside>

      <Parallax speed={-5}>
        <div className="two absolute right-16 top-0 h-8 w-8 rounded-full bg-black xl:block xl:h-16 xl:w-16" />
      </Parallax>
      <Parallax speed={-5}>
        <div className="six absolute right-32 top-56 h-28 w-28 rounded-full bg-black xl:top-56 xl:block xl:h-44 xl:w-44" />
      </Parallax>
      <div className="seven absolute right-0 top-1/2 -mr-8 h-14 w-7 rounded-l-full bg-black xl:bottom-96 xl:right-0 xl:block xl:h-48 xl:w-24" />
      <Parallax speed={-5}>
        <div className="eight absolute bottom-72 right-44 hidden h-32 w-32 rounded-full bg-black xl:block" />
      </Parallax>
      <Parallax speed={5}>
        <div className="nine absolute right-24 top-0 h-16 w-16 rounded-full bg-black lg:hidden xl:bottom-96 xl:right-96" />
      </Parallax>
    </section>
  );
}
