import { pageNumber, regionName } from "./session-variables";
import { Region } from "../src/types/region";

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

export function getKlerkDetailsJSONPaths(customRegionName?: Region): string {
  return `data/klerk-details-json/${
    customRegionName ? customRegionName : regionName
  }.json`;
}

export function getKlerkDetailsCSVPaths(): string {
  return `data/klerk-details-csv/${regionName}.csv`;
}

export function getRegionCollectionJSONFilePaths(): string {
  return `data/region-collection.json`;
}

export function getEnterprisesCollectionJSONFilePaths(): string {
  return `data/largest-enterprises-collection.json`;
}
