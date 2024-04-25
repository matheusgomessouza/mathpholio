"use client";
import * as interfaces from "@/types/interfaces";

export default function ProjectsComponent({
  id,
  name,
  html_url,
  description,
  created_at,
  updated_at,
  pushed_at,
  homepage,
  license,
  topics,
}: interfaces.GithubReposProps) {
  return (
    <article key={id} className="mb-8">
      <ul>
        <li>{name}</li>
        <li>{html_url}</li>
        <li>{description}</li>
        <li>{created_at}</li>
        <li>{updated_at}</li>
        <li>{pushed_at}</li>
        {homepage ? <li>{homepage}</li> : null}
        {license ? <li>{license.name}</li> : null}
        {topics ? (
          <ul>
            {topics.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </ul>
    </article>
  );
}
