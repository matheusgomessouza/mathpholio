import * as interfaces from "@/types/interfaces";
import { ComponentType, lazy, LazyExoticComponent } from "react";

export function isLastTechsItem(item: number, length: number) {
  if (item === length - 1) return true;
  return false;
}

export function convertDateFormat(date: string) {
  if (date) {
    const isoDate = new Date(date);
    const formattedDate = isoDate
      .toISOString()
      .split("T")[0]
      .replace(/-/g, "/");

    return formattedDate;
  }
}

export function payloadManipulation(
  value: Array<interfaces.GithubReposResponseProps>
): Array<interfaces.GithubReposProps> {
  const convertedObjectInArray = Object.entries(value);
  const filteredReposObjects: interfaces.GithubReposResponseProps[] =
    convertedObjectInArray.map((arr) => arr[1]);

  const extractedReposProps = filteredReposObjects.map((arr) => {
    let arrayWithRepoProps: Array<interfaces.GithubReposProps> = [];

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
}

export function lazyLoad(
  path: string,
  namedExport: string
): LazyExoticComponent<ComponentType<any>> {
  return lazy(() => {
    const promise = import(path);

    if (namedExport === null) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[namedExport] }));
    }
  });
}
