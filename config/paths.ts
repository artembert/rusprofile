import { pageNumber, regionName } from "./session-variables";

export function getMarkupFilePath(): string {
  return `${getMarkupFoldersPath()}/${regionName}-${pageNumber}.html`;
}

export const markupFoldersPaths = {
  kirovsk: "data/markup/kirovsk",
  roshhino: "data/markup/roshhino",
  shlisselburg: "data/markup/shlisselburg",
};

export function getMarkupFoldersPath(): string {
  return `data/markup/${regionName}`;
}

export const detailsMarkupsPaths = {
  kirovsk: "data/details-markup/kirovsk",
  roshhino: "data/details-markup/roshhino",
};

export function getDetailsMarkupsPaths(): string {
  return `data/details-markup/${regionName}`;
}

export const linksPaths = {
  kirovsk: "data/links/kirovsk.json",
  roshhino: "data/links/roshhino.json",
};

export function getLinksPath(): string {
  return `data/links/${regionName}.json`;
}

export const searchPageDetailsPaths = {
  kirovsk: "data/annotations/kirovsk",
  roshhino: "data/annotations/roshhino",
};

export function getSearchPageDetailsPath(): string {
  return `data/annotations/${regionName}.json`;
}

export function getKlerkDetailsRawPath(): string {
  return `data/klerk-details-raw/${regionName}.json`;
}

export const klerkDetailsJSONPaths = {
  kirovsk: "data/klerk-details-json/kirovsk",
  roshhino: "data/klerk-details-json/roshhino",
};

export function getKlerkDetailsJSONPaths(): string {
  return `data/klerk-details-json/${regionName}.json`;
}

export const klerkDetailsCSVPaths = {
  kirovsk: "data/klerk-details-csv/kirovsk",
  roshhino: "data/klerk-details-csv/roshhino",
};
