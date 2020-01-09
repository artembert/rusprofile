import { getPage } from "./src/components/get-page";
import { writeMarkup } from "./src/write-markup";
import { linksPaths, markupPaths } from "./config/paths";
import { getLinksFromSearchPage } from "./src/components/get-links-from-search-page";
import * as fs from "fs";
import { regionName } from "./config/region";
import { getRusprofileQuery } from "./config/rusprofile-query";
import { Region } from "./src/types/region";

const pageNumber = 1;

(async () => {
  const markupPath = getFilePath(regionName, pageNumber);
  const searchPageMarkup = await getPage(getRusprofileQuery(regionName, pageNumber));
  if (searchPageMarkup) {
    await writeMarkup(markupPath, searchPageMarkup);
    const links = getLinksFromSearchPage(markupPath);
    fs.appendFileSync(linksPaths[regionName], JSON.stringify(links, undefined, 4));
    console.log(`Links saved to ${linksPaths[regionName]}`);
  } else {
    console.error("Error: no markup!");
  }
})();

function getFilePath(regionName: Region, pageNumber: number): string {
  return `${markupPaths[regionName]}-${pageNumber}.html`;
}
