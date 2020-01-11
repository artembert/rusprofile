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

export const markupPaths = {
  kirovsk: "data/markup/kirovsk/kirovsk",
  roshhino: "data/markup/roshhino/roshhino",
  shlisselburg: "data/markup/shlisselburg",
};

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

export function getSearchPageDetailsPaths(): string {
  return `data/annotations/${regionName}.json`;
}

export const klerkDetailsRawPaths = {
  kirovsk: "data/klerk-details-raw/kirovsk",
  roshhino: "data/klerk-details-raw/roshhino",
};


export const klerkDetailsJSONPaths = {
  kirovsk: "data/klerk-details-json/kirovsk",
  roshhino: "data/klerk-details-json/roshhino",
};

export const klerkDetailsCSVPaths = {
  kirovsk: "data/klerk-details-csv/kirovsk",
  roshhino: "data/klerk-details-csv/roshhino",
};
