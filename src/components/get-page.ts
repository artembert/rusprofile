import * as superagen from "superagent";

export function getPage(url: string): Promise<string> {
  console.log("URL:", url.substring(0, 40) + "...");
  return (async () => {
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
      console.log(
        response.text
          .substring(0, 100)
          .replace(/\n/gi, "")
          .replace(/  /gi, "")
      );
    } else {
      console.log("Ошибка HTTP: " + response.status);
    }
    return response ? response.text : "";
  })();
}
