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
        INN,
        org_name: undefined,
        revenue_date: undefined,
        expenses: undefined,
        revenue: undefined,
        short_name: undefined,
        okved_main_name: undefined,
        okved_main_code: undefined,
        employees: undefined,
        place_info: undefined,
      };
    });
}
