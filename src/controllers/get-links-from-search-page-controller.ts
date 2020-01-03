import { linksPath, markupPaths } from "../../config/paths";
import { getLinksFromSearchPage } from "../components/get-links-from-search-page";
import * as fs from "fs";

getLinksFromSearchPageController();

export function getLinksFromSearchPageController() {
  const links = getLinksFromSearchPage(markupPaths.path);
  fs.writeFileSync(linksPath, JSON.stringify(links, undefined, 4));
}
