import { getPage } from "./src/components/get-page";
import { writeMarkup } from "./src/write-markup";
import { linksPath, markupPaths } from "./config/paths";
import { getLinksFromSearchPage } from "./src/components/get-links-from-search-page";
import * as fs from "fs";

const pageNumber = 1;

(async () => {
  const markupPath = getFilePath(markupPaths.kirovsk, pageNumber);
  const searchPageMarkup = await getPage(getUrl(pageNumber));
  if (searchPageMarkup) {
    await writeMarkup(markupPath, searchPageMarkup);
    const links = getLinksFromSearchPage(markupPath);
    fs.appendFileSync(linksPath, JSON.stringify(links, undefined, 4));
    console.log(`Links saved to ${linksPath}`);
  } else {
    console.error("Error: no markup!");
  }
})();

function getUrl(pageNumber: number): string {
  if (pageNumber > 1) {
    return `https://www.rusprofile.ru/search/${pageNumber}?query=%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%2C+%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%2C+%D0%B3%D0%BE%D1%80%D0%BE%D0%B4+%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA&type=ul&search_inactive=2`;
  }
  return "https://www.rusprofile.ru/search?query=%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%2C+%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%2C+%D0%B3%D0%BE%D1%80%D0%BE%D0%B4+%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA&type=ul&search_inactive=2";
}

function getFilePath(regionName: string, pageNumber: number): string {
  return `${markupPaths.kirovsk}-${pageNumber}.html`;
}
