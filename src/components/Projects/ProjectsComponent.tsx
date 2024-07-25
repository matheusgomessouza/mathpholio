"use client";

import * as interfaces from "@/types/interfaces";
import { ImGithub } from "react-icons/im";
import ButtonComponent from "../Button/ButtonComponent";
import Link from "next/link";
import { convertDateFormat } from "@/utils/utils";
import { useEffect, useState, useCallback } from "react";

export default function ProjectsComponent({
  id,
  name,
  html_url,
  description,
  created_at,
  updated_at,
  homepage,
  license,
  topics,
  language,
}: interfaces.GithubReposProps) {
  const [repoImages, setRepoImages] = useState<Array<string>>([]);

  const memoizedGetProjectsImage = useCallback(async () => {
    const data = { html_url: html_url, homepage: homepage };

    try {
      const response = await fetch(
        `/api/automation/${homepage ? homepage : html_url}/screenshot`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      // console.log(response);
    } catch (error) {
      console.error("Unable to retrieve repo images [getProjectsImage]", error);
    }
  }, [homepage, html_url]);

  // Call the Route Handler `/api/automation/screenshot`
  async function getProjectsImage() {
    const data = { html_url: html_url, homepage: homepage };

    try {
      await fetch(`/api/automation/screenshot`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("Unable to retrieve repo images [getProjectsImage]", error);
    }
  }

  // useEffect(() => {
  // memoizedGetProjectsImage();
  // }, [memoizedGetProjectsImage]);

  return (
    <>
      <article
        key={id}
        className="keen-slider__slide mb-8 flex flex-col-reverse items-center justify-end gap-6 px-6 xl:flex-row xl:justify-between xl:gap-20 xl:text-xl"
      >
        <aside className="w-full xl:w-1/2">
          <strong className="font-alt font-normal">{name}</strong>
          <p className="xl:text-base 2xl:text-xl">{description}</p>
          <section className="mt-4 flex flex-col xl:mt-6 xl:text-base 2xl:text-xl">
            <div className="mb-2 xl:hidden">
              <ButtonComponent
                isMobile
                label="Github"
                link={html_url}
                ariaLabel="Check out the GitHub page for this project!"
              >
                <ImGithub />
              </ButtonComponent>
            </div>
            {license ? (
              <span className="font-alt font-normal">{license.name}</span>
            ) : null}
            <div className="flex items-center gap-1">
              <div className="hidden gap-1 xl:flex">
                <span className="font-alt font-normal">Github:</span>
                <Link
                  href={html_url ?? ""}
                  className="font-sans underline-offset-2"
                >
                  {html_url}
                </Link>
              </div>
            </div>
            {homepage ? (
              <div className="flex items-center gap-1">
                <span className="font-alt font-normal">Link:</span>
                <Link
                  href={homepage ?? ""}
                  className="font-sans underline-offset-2"
                >
                  {homepage}
                </Link>
              </div>
            ) : null}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="font-alt font-normal">
                  {window.innerWidth < 640 ? "Created:" : "Created at:"}
                </span>
                <p>{convertDateFormat(created_at)}</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-alt font-normal">
                  {window.innerWidth < 640 ? "Updated:" : "Updated at:"}
                </span>
                <p>{convertDateFormat(updated_at)}</p>
              </div>
            </div>
          </section>
          {language && (
            <div className="flex items-center gap-1">
              <span className="font-alt font-normal xl:text-base 2xl:text-xl">
                Related Languages:
              </span>
              <p className="xl:text-base 2xl:text-xl">{language}</p>
            </div>
          )}
          {topics ? (
            <ul className="mt-8 flex w-full flex-wrap items-center gap-2">
              {topics.map((item: string) => (
                <li
                  key={item}
                  className="rounded-full bg-black p-1 px-6 font-alt text-sm font-normal text-color-eight dark:bg-color-two xl:text-xs 2xl:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </aside>

        <figure className="w-full xl:w-1/2">
          <div className="h-60 w-full rounded-3xl bg-color-seven dark:bg-color-two xl:h-[50vh]"></div>
        </figure>
      </article>
    </>
  );
}
