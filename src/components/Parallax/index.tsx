"use client";

import Image from "next/image";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

import myPicture from "../../../public/assets/main-circle.png";
import TypewriterComponent from "@/components/Typewriter/Typewriter";
import Link from "next/link";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";

import layerOne from "../../../public/layer-front.png";

export default function ParallaxComponent() {
  return (
    <section className="relative flex flex-col-reverse items-center lg:h-screen lg:flex-row">
      <div className="first absolute right-1/4 top-0 -mt-16 hidden h-40 w-80 rounded-b-full bg-black lg:block" />
      <article className="flex w-1/2 flex-col items-center">
        <div className="lg:mx-24 lg:w-[800px]">
          <TypewriterComponent />
          <p className="text-center text-base leading-6 lg:text-justify">
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

      <div className="one absolute right-0 top-0 -mr-8 h-32 w-16 rounded-l-full bg-black lg:right-0 lg:top-32 lg:block lg:h-96 lg:w-48" />
      <Parallax speed={5}>
        <div className="three absolute bottom-80 left-32 hidden h-64 w-64 rounded-full bg-black lg:block" />
      </Parallax>
      <Parallax speed={-5}>
        <div className="four absolute left-48 top-72 hidden h-16 w-16 rounded-full bg-black lg:block" />
      </Parallax>
      <Parallax speed={-5}>
        <div className="five absolute hidden h-24 w-48 rounded-b-full bg-black lg:left-0 lg:top-24 lg:block lg:h-48 lg:w-48 lg:rounded-full" />
      </Parallax>
      <aside className="flex w-1/2 items-center justify-center">
        <Parallax speed={-1}>
          <div className="relative flex h-auto w-screen items-center justify-center before:absolute before:z-[1] before:h-auto before:w-screen before:rounded-full before:bg-black before:content-[''] lg:h-[900px] lg:w-[900px]">
            <Image
              priority={true}
              src={myPicture}
              width={900}
              height={700}
              sizes=""
              alt="A person with a long beard, serious expression"
              className="relative z-[2] w-[85vw]"
            />
          </div>
        </Parallax>
      </aside>

      <Parallax speed={-5}>
        <div className="two absolute right-16 top-0 h-8 w-8 rounded-full bg-black lg:right-24 lg:block lg:h-16 lg:w-16" />
      </Parallax>
      <Parallax speed={-5}>
        <div className="six absolute right-32 top-56 h-28 w-28 rounded-full bg-black lg:right-24 lg:top-56 lg:block lg:h-44 lg:w-44" />
      </Parallax>
      <div className="seven absolute right-0 top-1/2 -mr-8 h-14 w-7 rounded-l-full bg-black lg:bottom-96 lg:right-0 lg:block lg:h-48 lg:w-24" />
      <Parallax speed={-5}>
        <div className="eight absolute bottom-72 right-44 hidden h-32 w-32 rounded-full bg-black lg:block" />
      </Parallax>
      <Parallax speed={5}>
        <div className="nine absolute right-24 top-0  h-16 w-16 rounded-full bg-black lg:bottom-96 lg:right-96 lg:block" />
      </Parallax>
    </section>
  );
}
