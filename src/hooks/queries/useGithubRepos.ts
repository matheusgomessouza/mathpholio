import { useQuery } from "@tanstack/react-query";
import * as interfaces from "@/types/interfaces";

export const useGithubRepos = () => {
  return useQuery({
    queryKey: ["githubRepos"],
    queryFn: async (): Promise<interfaces.GithubReposProps[]> => {
      const response = await fetch("/api/github/repos");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const repos = await response.json();
      return repos.data;
    },
  });
};
