import { linksPath } from "../../config/paths";
import { getLinksFromSearchPage } from "../components/get-links-from-search-page";
import * as fs from "fs";

export function getLinksFromSearchPageController(markupPath: string) {
  const links = getLinksFromSearchPage(markupPath);
  fs.appendFileSync(linksPath, JSON.stringify(links, undefined, 4));
  console.log(`links saved to ${linksPath}`);
}
