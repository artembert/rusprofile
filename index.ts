import { downloadSearchPageMarkupController } from "./src/controllers/download-search-page-markup-controller";
import { getLinksFromSearchPagesController } from "./src/controllers/get-links-from-search-page-controller";

(async () => {
  // * Download search-pages markup
  await downloadSearchPageMarkupController();
  // * Get links from search-pages
  await getLinksFromSearchPagesController();
})();
