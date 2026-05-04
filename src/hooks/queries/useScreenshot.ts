import { useQuery } from "@tanstack/react-query";

export const useScreenshot = (url: string | null | undefined) => {
  return useQuery({
    queryKey: ["screenshot", url],
    queryFn: async (): Promise<string> => {
      if (!url) return "";
      const response = await fetch(
        `/api/automation/screenshot?url=${url}&width=1280&height=720`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
          cache: "no-store",
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const payload = data.payload;
      return typeof payload === "string" ? payload : "";
    },
    enabled: !!url,
  });
};
