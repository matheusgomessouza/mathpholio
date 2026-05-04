"use client";

import { useState, useEffect, memo, Suspense, useMemo } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { KeenSliderInstance } from "keen-slider";

import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

import ProjectsComponent from "@/components/Carousel/Projects/ProjectsComponent";
import * as interfaces from "@/types/interfaces";
import { LoadingComponent } from "../Loading/LoadingComponent";
import { useGithubRepos } from "@/hooks/queries/useGithubRepos";

export const CarouselComponent = memo(() => {
  const { data: repos = [] } = useGithubRepos();
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

  return (
    <>
      <article ref={sliderRef} className="keen-slider" role="article">
        <Suspense fallback={<LoadingComponent />}>
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
        <section className="relative mt-6 hidden items-center justify-center lg:flex">
          <section className="absolute right-0 ml-auto flex gap-3">
            <button
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-color-two bg-color-four text-color-eight shadow-sm transition hover:bg-color-five focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              aria-label="Previous project"
            >
              <MdOutlineChevronLeft size={20} />
            </button>
            <button
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-color-two bg-color-four text-color-eight shadow-sm transition hover:bg-color-five focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              aria-label="Next project"
            >
              <MdOutlineChevronRight size={20} />
            </button>
          </section>
        </section>
      )}
    </>
  );
});

CarouselComponent.displayName = "CarouselComponent";
