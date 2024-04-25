import React from "react";
import { ListFormat, LiteralLikeNode } from "typescript";

export type ReposInfoProps = {
  id: string;
  name: string;
  html_url: string;
  description: string;
  topics: string[];
  owner: {
    avatar_url: string;
  };
};

export type RepoResponseProps = {
  id: string;
  avatar: string;
  name: string;
  description: string;
  url: string;
  techs: string[];
};

export interface MenuProps {
  id: string;
  title: string;
  link: string;
}

export interface TechSkills {
  icon: string;
  title: string;
  description: string;
}

export interface Services {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface ReorderProps {
  data: Array<TechSkills>;
}

export interface ButtonComponentProps {
  label: string;
  link: string;
  ariaLabel: string;
  children: React.ReactElement;
}

export interface ExperienceDescriptionComponentProps {
  jobTitle: string;
  company: string;
  locality: string;
  period: string;
  children: React.ReactNode;
}

export interface GithubReposProps {
  id: number;
  name: string;
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage?: string;
  license?: {
    key: string;
    name: string;
  } | null;
  topics: Array<string>;
}
