"use client";

import { useState, useEffect, useCallback } from "react";
import ProjectsComponent from "../Projects/ProjectsComponent";
import * as interfaces from "@/types/interfaces";

export default function CarouselComponent({ data }: { data: any }) {
  const [repos, setRepos] = useState<interfaces.GithubReposProps[]>([]);

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
    <article className="mt-20">
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
  );
}
