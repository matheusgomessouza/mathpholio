"use client";

import { useState, useEffect, useCallback } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import ProjectsComponent from "../Projects/ProjectsComponent";
import * as interfaces from "@/types/interfaces";

export default function CarouselComponent({ data }: { data: any }) {
  const [repos, setRepos] = useState<interfaces.GithubReposProps[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const transformPayload = useCallback(
    (value: Array<interfaces.GithubReposResponseProps>) => {
      const convertedObjectInArray = Object.entries(value);
      const filteredReposObjects: interfaces.GithubReposResponseProps[] =
        convertedObjectInArray.map((arr) => arr[1]);

      const extractedReposProps = filteredReposObjects.map((arr) => {
        let arrayWithRepoProps = [];

        const {
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
        } = arr;

        arrayWithRepoProps.push({
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
        });

        return arrayWithRepoProps;
      });

      return extractedReposProps.flat();
    },
    []
  );

  useEffect(() => {
    const convertedPayloadData = transformPayload(data);
    setRepos(convertedPayloadData);
  }, [data, transformPayload]);

  return (
    <>
      <article ref={sliderRef} className="keen-slider mt-20">
        {repos.map((item: interfaces.GithubReposProps) => (
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
          />
        ))}
      </article>
      {/* {loaded && instanceRef.current && (
        <div className="flex justify-center px-0 py-3">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={
                  "mx-1 my-0 h-3 w-3 cursor-pointer rounded-full border-0 bg-color-two p-1" +
                  (currentSlide === idx
                    ? "mx-1 my-0 h-3 w-3 cursor-pointer rounded-full border-0  bg-color-eight p-1"
                    : "")
                }
              ></button>
            );
          })}
        </div>
      )} */}
    </>
  );
}
