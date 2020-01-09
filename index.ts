import { downloadSearchPageMarkupController } from "./src/controllers/download-search-page-markup-controller";
import { getLinksFromSearchPagesController } from "./src/controllers/get-links-from-search-page-controller";
import { parseSearchPageController } from "./src/controllers/parse-search-page-controller";
import { getDetailsFromKlerkController } from "./src/controllers/get-details-from-klerk";
import { parseRawDetailsFromKlerkController } from "./src/controllers/parse-raw-details-from-klerk-controller";

(async () => {
  // * Download search-pages markup
  await downloadSearchPageMarkupController();
  // * Get links from search-pages
  await getLinksFromSearchPagesController();
  // * Parse search-pages
  await parseSearchPageController();
  // * Get details from Klerk
  await getDetailsFromKlerkController();
  // * Parse raw details from Klerk
  await parseRawDetailsFromKlerkController();
})();
