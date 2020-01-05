import * as fs from "fs";
import * as cheerio from "cheerio";
import { Enterprise } from "../types/enterprise";

export function parseDetailPage(filePath: string): Enterprise {
  const markup = fs.readFileSync(filePath);
  const $: CheerioStatic = cheerio.load(markup);
  console.log(`links taken from markup [${filePath}]`);
  const INN = $(`#clip_inn`).text();

  return {
    INN
  }
}
