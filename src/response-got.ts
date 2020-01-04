import got from "got";
import { writeMarkup } from "./write-markup";

const url =
  "https://www.rusprofile.ru/search/6?query=%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%2C+%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%2C+%D0%B3%D0%BE%D1%80%D0%BE%D0%B4+%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA&type=ul&search_inactive=2";

const instance = got.extend({
  hooks: {
    beforeRequest: [
      options => {
        if (!options.context) {
          throw new Error("Token required");
        }

        options.headers = options.context;
        options.decompress = true;
      }
    ],
    beforeError: [
      error => error
    ]
  }
});

(async () => {
  const context = {
    assept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "ru,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "Content-Type": "text/html; charset=utf-8",
    "Content-Encoding": "gzip, deflate",
    "accept-encoding": "gzip, deflate, br"
  };

  const response = await instance(url, { context });
  writeMarkup(response.body);
})();
