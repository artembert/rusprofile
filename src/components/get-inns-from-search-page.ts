import * as cheerio from "cheerio";
import * as fs from "fs";
import { Details } from "../types/details";

export function getINNsFromSearchPage(filePath: string): Details[] {
  const markup = fs.readFileSync(filePath);
  const $: CheerioStatic = cheerio.load(markup);
  return $(".company-item")
    .toArray()
    .map(companyEl => {
      const INN = $(companyEl)
        .find(".company-item-info dl")
        .filter((index, element) => {
          return (
            $(element)
              .find("dt")
              .text()
              .trim() === "ИНН"
          );
        })
        .first()
        .find("dd")
        .text();
      return {
        INN
      };
    });
}
