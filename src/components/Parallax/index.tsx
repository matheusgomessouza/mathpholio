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
    <section className="relative flex items-center lg:h-screen">
      <div className="first absolute right-1/4 top-0 -mt-16 h-40 w-80 rounded-b-full bg-black" />
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

      <div className="one absolute right-0 top-32 -mr-8 h-96 w-48 rounded-l-full bg-black" />
      <Parallax speed={5}>
        <div className="three absolute bottom-80 left-32 h-64 w-64 rounded-full bg-black" />
      </Parallax>
      <Parallax speed={-5}>
        <div className="four absolute left-48 top-72 h-16 w-16 rounded-full bg-black" />
      </Parallax>
      <Parallax speed={-5}>
        <div className="five absolute left-0 top-24 h-48 w-48 rounded-full bg-black" />
      </Parallax>
      <aside className="flex w-1/2 items-center justify-center">
        <Parallax speed={-1}>
          <div className="relative flex h-[900px] w-[900px] items-center justify-center before:absolute before:z-[1] before:h-[750px] before:w-[750px] before:rounded-full before:bg-black before:content-['']">
            <Image
              priority={true}
              src={myPicture}
              width={900}
              height={700}
              sizes=""
              alt="A person with a long beard, serious expression"
              className="relative z-[2]"
            />
          </div>
        </Parallax>
      </aside>

      <Parallax speed={-5}>
        <div className="two absolute right-0 h-16 w-16 rounded-full bg-black" />
      </Parallax>
      <Parallax speed={-5}>
        <div className="six absolute right-24 top-56  h-44 w-44 rounded-full bg-black" />
      </Parallax>
      <div className="seven absolute bottom-96 right-0 -mr-8 h-48 w-24 rounded-l-full bg-black" />
      <Parallax speed={-5}>
        <div className="eight absolute bottom-72 right-44 h-32 w-32 rounded-full bg-black" />
      </Parallax>
      <Parallax speed={5}>
        <div className="nine absolute bottom-96 right-96 h-16 w-16 rounded-full bg-black" />
      </Parallax>
    </section>
  );
}
