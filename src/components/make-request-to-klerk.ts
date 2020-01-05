import * as superagen from "superagent";

export function getRequestToKlerk(url: string): Promise<string> {
  console.log("URL:", url.substring(0, 40) + "...");
  return (async () => {
    let response = await superagen
      .get(url)
      .withCredentials()
      .set({
        accept: "application/json, text/plain, */*",
        "accept-language": "ru,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
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
    return response ? response.body : "";
  })();
}
