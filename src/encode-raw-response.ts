import * as fs from "fs";
import { markupPaths } from "../config/paths";
import * as cheerio from "cheerio";

export function encodeRawResponse(): void {
  const raw = fs.readFileSync(markupPaths.path).toString();
  encodeRaw(raw);
  fs.writeFileSync(markupPaths.encode, encodeRaw(raw));
}

function encodeRaw(text: string) {
  return cheerio.load(text).html();
}
