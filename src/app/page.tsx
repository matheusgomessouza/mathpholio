"use client";

import Image from "next/image";
import Link from "next/link";
import {
  websiteLogo,
  menuLabels,
  profilePicture,
  techs,
} from "@/variables/data";
import {
  MenuProps,
  RepoResponseProps,
  ReposInfoProps,
} from "@/types/interfaces";

import { CarrousselComponent } from "@/components/Carroussel/Carroussel";
import TypewriterComponent from "@/components/Typewriter/Typewriter";
import { ReorderComponent } from "@/components/Reorder/Reorder";
import { ArrowRight } from "lucide-react";
import { getGithubData } from "@/services/github-api";
import { useState } from "react";

export default async function Home() {
  const [repos, setRepos] = useState<
    Array<{
      id: string;
      avatar: string;
      name: string;
      description: string;
      url: string;
      techs: string[];
    }>
  >();
  const data: ReposInfoProps[] = await getGithubData();

  if (Array.isArray(data)) {
    const repositoriesInfo = data.map((item: ReposInfoProps) => {
      return {
        id: item.id,
        avatar: item.owner.avatar_url,
        name: item.name,
        description: item.description,
        url: item.html_url,
        techs: item.topics,
      };
    });

    const reposWithDescriptionAndTopics = repositoriesInfo.filter(
      (item) => item.description?.length > 20 && item.techs.length > 0
    );

    setRepos(reposWithDescriptionAndTopics);
  }

  return (
    <>
      <header className="from- fixed z-10 m-auto flex w-full items-center justify-between bg-gradient-to-b px-8 pt-4">
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
          href={`https://www.linkedin.com/messaging/thread/new/?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3Be26iL7QIQjaCwqy%2FbNjIdQ%3D%3D`}
          aria-label="Reach me out through here"
          target="_blank"
          className="flex h-12 items-center rounded-lg bg-black px-8 text-white drop-shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black hover:drop-shadow-2xl"
        >
          Contact Me
        </Link>
      </header>

      <main className="p-8">
        <div className="m-auto flex flex-col">
          <section className="flex items-center justify-between gap-x-8">
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
                    className="flex items-center justify-center rounded-lg bg-black p-2  px-8 text-white drop-shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-white hover:text-black hover:drop-shadow-2xl"
                  >
                    Hire Me
                  </Link>
                  <Link
                    aria-label="Want a sneaky pick?"
                    href={`https://www.linkedin.com/in/matheus-gomes-de-souza/?locale=en_US`}
                    target="_blank"
                    className="rounded-lg bg-white p-2 px-8 drop-shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white"
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
          <section className="my-60 flex w-full gap-8">
            <ReorderComponent data={techs} />
          </section>
          <section>
            <CarrousselComponent>
              {repos?.map((item: RepoResponseProps) => (
                <article
                  key={item.id}
                  className="keen-slider__slide flex gap-10"
                >
                  <aside>
                    <h1 className="mb-6 text-9xl">{item.name}</h1>
                    <p className="mb-12">{item.description}</p>
                    <Link
                      href={item.url}
                      aria-label="Know more about this specific project"
                      className=""
                    >
                      Know more about this specific project
                    </Link>

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
            </CarrousselComponent>
          </section>
          <section>
            <h1>Work Experience</h1>
            <div className="flex flex-col gap-10 p-8">
              <div className="space-y-4">
                <time className="text-black-100 before:bg-black-50 -ml-8 flex items-center gap-2 text-sm before:h-px before:w-5">
                  04 / 12 / 2023
                </time>
                <p className="text-black-100 text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit repellendus est distinctio possimus ipsum?
                  Facere tempora inventore dignissimos nihil, neque sequi
                  dolores. Labore saepe commodi obcaecati. Dolorum provident
                  odit rem.
                </p>

                <Link
                  href=""
                  className="text-black-200 hover:text-black-100 flex items-center gap-2 text-sm"
                >
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-light-gray text-center">
        <p>Mathpholio™️, Copyright {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
