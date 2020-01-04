import * as superagen from "superagent";
import { writeMarkup } from "./write-markup";

const url =
  "https://www.rusprofile.ru/search/6?query=%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%2C+%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%2C+%D0%B3%D0%BE%D1%80%D0%BE%D0%B4+%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA&type=ul&search_inactive=2";

export function getPage() {
  (async () => {
    let response = await superagen
      .get(url)
      .withCredentials()
      .set({
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "ru,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1"
      })
      .set("Content-Type", "text/html; charset=utf-8")
      .set("Content-Encoding", "gzip")
      .send();

    if (response.ok) {
      console.log(response.text.substring(0, 100));
      writeMarkup(response.text);
    } else {
      console.log("Ошибка HTTP: " + response.status);
    }
  })();
}
