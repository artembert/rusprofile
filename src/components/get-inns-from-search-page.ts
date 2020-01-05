import * as cheerio from "cheerio";
import * as fs from "fs";
import { CompanyDetails } from "../types/company-details";

export function getINNsFromSearchPage(filePath: string): CompanyDetails[] {
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
