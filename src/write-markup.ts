import * as fs from "fs";
import {markupPaths} from "../config/paths";

export function writeMarkup(text: string) {
  fs.writeFileSync(markupPaths.path, text);
  console.log(`file [${markupPaths.path}] saved`);
}
