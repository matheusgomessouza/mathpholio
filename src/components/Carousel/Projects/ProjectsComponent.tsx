"use client";

import Link from "next/link";
import Image from "next/image";
import { ImGithub } from "react-icons/im";
import { useEffect, useState, useCallback } from "react";

import * as interfaces from "@/types/interfaces";
import { convertDateFormat } from "@/utils/utils";
import ButtonComponent from "@/components/Button/ButtonComponent";
import { useScreenSize } from "@/hooks/useScreenSize";

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
  const screenSize = useScreenSize();
  const isMobile = screenSize > 0 && screenSize < 640;
  const [repoImage, setRepoImage] = useState<string>("");

  const memoizedGetProjectsImage = useCallback(async () => {
    try {
      const response = await fetch(
        `/api/automation/screenshot?url=${
          homepage ? homepage : html_url
        }&width=1280&height=720`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
          cache: "no-store",
        }
      );
      const payload = await response.json().then((data) => data.payload);

      setRepoImage(typeof payload === "string" ? payload : "");
    } catch (error) {
      console.error("Unable to retrieve repo images [getProjectsImage]", error);
      setRepoImage("");
    }
  }, [homepage, html_url]);

  useEffect(() => {
    memoizedGetProjectsImage();
  }, [memoizedGetProjectsImage]);

  return (
    <>
      <article
        key={id}
        className="keen-slider__slide flex w-full flex-col overflow-hidden rounded-3xl border border-color-two bg-color-four shadow-md"
      >
        <figure className="w-full p-4">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-color-two bg-color-seven">
            {repoImage &&
            (repoImage.startsWith("data:image") ||
              repoImage.startsWith("http")) ? (
              <Image
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
                loading="lazy"
                src={repoImage}
                alt={`Screenshot preview of ${name}`}
                className="pointer-events-none cursor-default bg-color-seven object-contain"
              />
            ) : (
              <Image
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
                loading="lazy"
                src="/assets/github-wallpaper-scaled.jpg"
                alt="Github logo, an octocat and Github label written in the right side. Both in white, the background is gray."
                className="pointer-events-none cursor-default bg-color-seven object-contain"
              />
            )}
          </div>
        </figure>
        <aside className="flex w-full flex-col gap-3 px-6 pb-6">
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-color-two bg-color-five px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-color-one">
              {language ?? "Project"}
            </span>
            <span className="text-xs text-color-one">
              {isMobile ? "Updated" : "Updated at"}{" "}
              {convertDateFormat(updated_at)}
            </span>
          </div>
          <strong className="font-alt text-lg font-semibold text-color-eight">
            {name}
          </strong>
          <p className="text-sm text-color-one md:text-base">{description}</p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <ButtonComponent
              isMobile
              label="Github"
              link={html_url}
              ariaLabel="Check out the GitHub page for this project!"
            >
              <ImGithub />
            </ButtonComponent>
            {homepage ? (
              <Link
                href={homepage ?? ""}
                className="text-xs font-semibold text-color-eight underline underline-offset-4"
              >
                Live demo
              </Link>
            ) : null}
          </div>
          {topics ? (
            <ul className="mt-2 flex w-full flex-wrap items-center gap-2">
              {topics.slice(0, 6).map((item: string) => (
                <li
                  key={item}
                  className="rounded-full border border-color-two bg-color-five px-2 py-1 text-[10px] font-medium text-color-one"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </aside>
      </article>
    </>
  );
}
