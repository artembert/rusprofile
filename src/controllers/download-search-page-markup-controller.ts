import { getMarkupFilePath, markupPaths } from "../../config/paths";
import { pageNumber, regionName } from "../../config/session-variables";
import { getPage } from "../components/get-page";
import { getRusprofileQuery } from "../../config/rusprofile-query";
import { writeMarkup } from "../write-markup";
import { createFolderIfDoesNotExist } from "../components/create-folder-if-does-not-exist";

export async function downloadSearchPageMarkupController() {
  const markupFilePath = getMarkupFilePath();
  const searchPageMarkup = await getPage(getRusprofileQuery(regionName, pageNumber));
  if (searchPageMarkup) {
    createFolderIfDoesNotExist(markupPaths[regionName]);
    await writeMarkup(markupFilePath, searchPageMarkup);
  } else {
    console.error("Error: no markup!");
  }
}
