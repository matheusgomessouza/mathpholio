"use client";

import {
  useState,
  useEffect,
  memo,
  Suspense,
  useMemo,
  useCallback,
} from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { KeenSliderInstance } from "keen-slider";

import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

import ProjectsComponent from "@/components/Carousel/Projects/ProjectsComponent";
import * as interfaces from "@/types/interfaces";
import { Loading } from "../Loading/LoadingComponent";

export const CarouselComponent = memo(() => {
  const [repos, setRepos] = useState<interfaces.GithubReposProps[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [_, setCurrentSlide] = useState(0);
  // Memoize slider configuration
  const sliderConfig = useMemo(
    () => ({
      loop: true,
      slides: {
        number: repos && repos.length ? repos.length : 39,
      },
      renderMode: "performance" as const,
      slideChanged(slider: KeenSliderInstance) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    }),
    [repos]
  );
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(sliderConfig);

  const getGitHubReposRouteHandler = useCallback(async () => {
    try {
      await fetch("/api/github/repos")
        .then((response) => response.json())
        .then((repos) => {
          setRepos(repos.data);
        });
    } catch (error) {
      console.error(
        "Unable to retrieve GitHub response /getGitHubReposData",
        error
      );
    }
  }, []);

  useEffect(() => {
    getGitHubReposRouteHandler();
  }, [getGitHubReposRouteHandler]);

  return (
    <>
      <article ref={sliderRef} className="keen-slider mt-20" role="article">
        <Suspense fallback={<Loading />}>
          {typeof repos !== "undefined" &&
            repos.length > 0 &&
            repos.map((item: interfaces.GithubReposProps) => (
              <ProjectsComponent
                key={item.id}
                id={item.id}
                name={item.name}
                html_url={item.html_url}
                description={item.description}
                created_at={item.created_at}
                updated_at={item.updated_at}
                homepage={item.homepage}
                license={item.license}
                topics={item.topics}
                language={item.language}
              />
            ))}
        </Suspense>
      </article>

      {repos && loaded && instanceRef.current && (
        <section className="relative mt-24 hidden items-center justify-center lg:flex xl:mt-8">
          <section className="absolute right-6 ml-auto mt-8 hidden gap-4 xl:flex">
            <div
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black dark:bg-color-two"
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            >
              <MdOutlineChevronLeft size={24} color="#FFFF" />
            </div>
            <div
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black dark:bg-color-two"
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            >
              <MdOutlineChevronRight size={24} color="#FFFF" />
            </div>
          </section>
        </section>
      )}
    </>
  );
});

CarouselComponent.displayName = "CarouselComponent";
