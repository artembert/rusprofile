import { Region } from "../types/region";
import { markupPaths } from "../../config/paths";
import { pageNumber, regionName } from "../../config/session-variables";
import { getPage } from "../components/get-page";
import { getRusprofileQuery } from "../../config/rusprofile-query";
import { writeMarkup } from "../write-markup";

export async function downloadSearchPageMarkupController() {
  const markupPath = getFilePath(regionName, pageNumber);
  const searchPageMarkup = await getPage(getRusprofileQuery(regionName, pageNumber));
  if (searchPageMarkup) {
    await writeMarkup(markupPath, searchPageMarkup);
  } else {
    console.error("Error: no markup!");
  }
}

function getFilePath(regionName: Region, pageNumber: number): string {
  return `${markupPaths[regionName]}-${pageNumber}.html`;
}
