import { pageNumber, regionName } from "./session-variables";

export function getMarkupFilePath(): string {
  return `${getMarkupFoldersPath()}/${regionName}-${pageNumber}.html`;
}

export function getMarkupFoldersPath(): string {
  return `data/markup/${regionName}`;
}

export function getDetailsMarkupsPaths(): string {
  return `data/details-markup/${regionName}`;
}

export function getLinksPath(): string {
  return `data/links/${regionName}.json`;
}

export function getSearchPageDetailsPath(): string {
  return `data/annotations/${regionName}.json`;
}

export function getKlerkDetailsRawPath(): string {
  return `data/klerk-details-raw/${regionName}.json`;
}

export function getKlerkDetailsJSONPaths(): string {
  return `data/klerk-details-json/${regionName}.json`;
}

export function getKlerkDetailsCSVPaths(): string {
  return `data/klerk-details-csv/${regionName}.csv`;
}
