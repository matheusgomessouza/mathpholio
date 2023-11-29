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

export interface ReorderProps {
  data: Array<TechSkills>;
}
