import * as cheerio from "cheerio";
import * as fs from "fs";

export function getLinksFromSearchPage(filePath: string): any[] {
  const markup = fs.readFileSync(filePath);
  const $: CheerioStatic = cheerio.load(markup);
  return $(".company-item__title a")
    .toArray()
    .map((linkElement, index) => linkElement.attribs.href.substring(4));
}
