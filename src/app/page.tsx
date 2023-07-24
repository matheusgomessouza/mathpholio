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

  return (
    <>
      <header className="m-auto flex w-[2000px] items-center justify-between pb-8 pt-6">
        <Image
          className="invert"
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
              <li className="mx-2" key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href={``}
          target="_blank"
          className="flex h-12 items-center border-4 border-neutral-600 border-b-zinc-950 border-l-zinc-950 px-8"
        >
          Contact Me
        </Link>
      </header>
      <main className="p-8">
        <div className="m-auto flex w-[2000px] flex-col">
          <section className="flex justify-between gap-x-8">
            <article className=" flex flex-col items-center">
              <div className="w-[800px]">
                <h1 className="w- mb-6 flex-wrap text-9xl">
                  What&apos;s up? I am Matheus Souza
                </h1>
                <p className="text-justify text-base leading-6">
                  Specialized in front-end technologies, primarily with the
                  Javascript stack ( React, Node.js, Next.js, and React Native
                  ). Currently transitioning to full-stack engineering.
                </p>
                <div className="flex gap-4 pt-6">
                  <Link
                    href={``}
                    target="_blank"
                    className="border-4 border-neutral-600 border-b-zinc-950 border-l-zinc-950 p-2"
                  >
                    Hire Me
                  </Link>
                  <Link
                    href={`https://www.linkedin.com/in/matheus-gomes-de-souza/?locale=en_US`}
                    target="_blank"
                    className="border-4 border-neutral-600 border-b-zinc-950 border-l-zinc-950 p-2"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </article>
            <aside className=" flex items-center justify-center">
              <picture className="w-max">
                <Image
                  className=""
                  src={profilePicture}
                  width={300}
                  height={300}
                  alt="Matheus Souza, black hair, huge blackbeard in a room with sunlight in his face"
                />
              </picture>
            </aside>
          </section>
          <section className="my-10 flex w-full justify-between gap-8">
            <div className="flex h-80 w-80 flex-col items-center justify-center bg-medium-gray">
              <h2 className="text-8xl font-black">3 +</h2>
              <p className="ml-6 mt-2 flex w-11 items-center justify-center text-4xl font-extrabold leading-10">
                Years Working Experience
              </p>
            </div>
            {techs.map((skill) => (
              <div key={skill.title} className="w-60">
                <Image
                  width={100}
                  height={100}
                  src={skill.icon}
                  alt={skill.title}
                  className="h-[100px]"
                />
                <p>{skill.description}</p>
              </div>
            ))}
          </section>
          <section className="">
            <Carroussel>
              {repositories.map((item: RepoResponseProps) => (
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
                    <Link href={item.url} />
                    <ul className="flex flex-row">
                      {item.techs.map((item: string) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </aside>
                </article>
              ))}
            </Carroussel>
          </section>
        </div>
      </main>
      <footer className=" bg-light-gray text-center">
        <p>Mathpholio™️, Copyright {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
