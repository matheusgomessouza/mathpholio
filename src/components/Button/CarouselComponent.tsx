"use client";

import { useState, useEffect, useCallback } from "react";
import ProjectsComponent from "../Projects/ProjectsComponent";
import * as interfaces from "@/types/interfaces";

export default function CarouselComponent({ data }: { data: any }) {
  const [repos, setRepos] = useState<interfaces.GithubReposProps[]>([]);

  function transformPayload(value: Array<{ num: string; value: object }>) {
    const result = value.map((object: any) => object.shift());
    return result;
  }

  useEffect(() => {
    const convertedPayloadData = transformPayload(data);
    setRepos(convertedPayloadData);
  }, [data]);

  return (
    <article className="mt-20">
      {/* {repos.map((item: interfaces.GithubReposProps) => (
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
        );
      )} */}
    </article>
  );
}
