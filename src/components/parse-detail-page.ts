import * as fs from "fs";
import * as cheerio from "cheerio";
import { Enterprise } from "../types/enterprise";

export function parseDetailPage(filePath: string, ID: string): Enterprise {
  const markup = fs.readFileSync(filePath);
  const $: CheerioStatic = cheerio.load(markup);
  console.log(`links taken from markup [${filePath}]`);
  const INN = $(`#clip_inn`).text();
  const employees = getEmployees($);

  return {
    ID,
    INN,
    employees,
  }
}

function getEmployees($: CheerioStatic): string {
  const employeesString = $(".company-info__title").filter((i, el) => {
    return $(el).text().trim() === "Среднесписочная численность";
  }).next(".company-info__text").text();
  return employeesString.split("сотрудник")[0].trim();
}
