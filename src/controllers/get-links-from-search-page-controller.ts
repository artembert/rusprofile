import {markupPaths} from "../../config/paths";
import {getLinksFromSearchPage} from "../compoenents/get-links-from-search-page";

getLinksFromSearchPageController();

export function getLinksFromSearchPageController() {
  console.log(getLinksFromSearchPage(markupPaths.path));
}
