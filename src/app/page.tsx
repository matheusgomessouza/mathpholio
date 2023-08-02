import Image from "next/image";
import Link from "next/link";

import {
  websiteLogo,
  menuLabels,
  profilePicture,
  techs,
  MenuProps,
} from "@/variables/data";
import { Carroussel } from "@/components/Carroussel";

interface RepoResponseProps {
  id: string;
  avatar: string;
  name: string;
  description: string;
  url: string;
  techs: string[];
}

export default async function Home() {
  const reposInfo = await fetch("http://localhost:3000/api/repos/", {
    cache: "no-cache",
  });
  const repositories = await reposInfo.json();
  const repositoriesWithDescription = repositories.filter(
    (repo: RepoResponseProps) =>
      repo.description?.length !== 0 && repo.techs.length !== 0
  );

  return (
    <>
      <header className="fixed z-10 m-auto flex w-screen items-center justify-evenly bg-gradient-to-b from-white pt-4">
        <Image
          className="glitch invert"
          src={websiteLogo}
          alt="Website logo - Mathpholio"
          width={215}
          height={80}
        />
        <nav
          role="navigation"
          aria-label="Navigation Menu"
          className="flex items-center"
        >
          <ul className="flex justify-evenly ">
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
          href={``}
          aria-label="Reach me out through here"
          target="_blank"
          className="flex h-12 items-center rounded-lg bg-black px-8 text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border hover:border-black hover:bg-white hover:text-black"
        >
          Contact Me
        </Link>
      </header>
      <main className="p-8">
        <div className="m-auto flex w-[2000px] flex-col">
          <section className="flex items-center justify-between gap-x-8">
            <article className=" flex flex-col items-center">
              <div className="w-[800px]">
                <h1 className="w- mb-6 flex-wrap pb-10 text-9xl">
                  What&apos;s up? I am Matheus Souza
                </h1>
                <p className="text-justify text-base leading-6">
                  Specialized in front-end technologies, primarily with the
                  Javascript stack ( React, Node.js, Next.js, and React Native
                  ). Currently transitioning to full-stack engineering. I
                  produce content aimed at web/mobile development on my Twitch
                  channel and in articles, developing live projects, and delving
                  deeper into the languages I bring to the agenda. Where anyone,
                  regardless of level, is welcome to ask questions and/or
                  contribute their ideas.
                </p>
                <div className="flex gap-4 pt-6">
                  <Link
                    aria-label="Hire my software development services"
                    href="mailto:matheusg_souza@outlook.com"
                    className="flex items-center justify-center rounded-lg bg-black  p-2 px-8 text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border hover:border-black hover:bg-white hover:text-black"
                  >
                    Hire Me
                  </Link>
                  <Link
                    aria-label="Want a sneaky pick?"
                    href={`https://www.linkedin.com/in/matheus-gomes-de-souza/?locale=en_US`}
                    target="_blank"
                    className="rounded-lg border-2 border-neutral-600 border-b-zinc-950 border-l-zinc-950 p-2 px-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </article>
            <aside className=" flex items-center justify-center">
              <picture className="w-max">
                <Image
                  className="mask"
                  src={profilePicture}
                  width={1050}
                  height={1050}
                  alt="Matheus Souza, black hair, huge blackbeard in a room with sunlight in his face"
                />
              </picture>
            </aside>
          </section>
          <section className="my-20 flex w-full justify-between gap-8">
            <div className="bg-medium-gray flex h-80 w-80 flex-col items-center justify-center bg-black">
              <h2 className="text-8xl text-white">3 +</h2>
              <p className="ml-6 mt-2 flex w-11 items-center justify-center text-4xl font-extrabold leading-10 text-white">
                Years Working Experience
              </p>
            </div>
            {techs.map((skill) => (
              <div key={skill.title} className="flex w-60 flex-col items-start">
                <Image
                  width={100}
                  height={68}
                  src={skill.icon}
                  alt={skill.title}
                  className="h-[100px] pb-8"
                />
                <p className="text-justify">{skill.description}</p>
              </div>
            ))}
          </section>
          <section className="">
            <Carroussel>
              {repositoriesWithDescription.map((item: RepoResponseProps) => (
                <article
                  key={item.id}
                  className="keen-slider__slide flex gap-10"
                >
                  <Image
                    className=""
                    src={item.avatar}
                    alt={item.name}
                    width={460}
                    height={460}
                  />
                  <aside className="w-[50%]">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <Link
                      href={item.url}
                      aria-label="Know more about this specific project"
                    />
                    <ul className="mt-6 flex flex-row flex-wrap justify-start gap-4">
                      {item.techs.map((item: string) => (
                        <li
                          key={item}
                          className="rounded-xl bg-black px-10 text-white"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </aside>
                </article>
              ))}
            </Carroussel>
          </section>
        </div>
      </main>
    </>
  );
}
