import { getPage } from "./src/response";
import { getLinksFromSearchPageController } from "./src/controllers/get-links-from-search-page-controller";
import { writeMarkup } from "./src/write-markup";

const url =
  "https://www.rusprofile.ru/search/6?query=%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%2C+%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%2C+%D0%B3%D0%BE%D1%80%D0%BE%D0%B4+%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA&type=ul&search_inactive=2";

(async () => {
  const searchPageMarkup = await getPage(url);
  if (searchPageMarkup) {
    writeMarkup(searchPageMarkup);
    getLinksFromSearchPageController();
  } else {
    console.error("Error: no markup!");
  }
})();
