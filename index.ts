import { downloadSearchPageMarkupController } from "./src/controllers/download-search-page-markup-controller";
import { getLinksFromSearchPagesController } from "./src/controllers/get-links-from-search-page-controller";
import { parseSearchPageController } from "./src/controllers/parse-search-page-controller";
import { getDetailsFromKlerkController } from "./src/controllers/get-details-from-klerk";
import { parseRawDetailsFromKlerkController } from "./src/controllers/parse-raw-details-from-klerk-controller";
import { saveDetailsToCsvController } from "./src/controllers/save-details-to-csv-controller";
import { printStatisticsController } from "./src/controllers/print-statistics-controller";

(async () => {
  await downloadSearchPageMarkupController(); // VPN required // * Download search-pages markup
  await processedMarkup(); // VPN NOT required
})();

async function processedMarkup() { // VPN NOT required
  await parseSearchPageController(); // * Parse search-pages
  await getDetailsFromKlerkController(); // * Get details from Klerk
  parseRawDetailsFromKlerkController(); // * Parse raw details from Klerk
  await saveDetailsToCsvController(); // * Convert Klerk details to CSV
  printStatisticsController(); // * Statistics
}
