import * as fs from "fs";
import { promisify } from "util";

const writeFile = promisify(fs.writeFile);

export async function writeMarkup(path: string, text: string) {
  await writeFile(path, text);
  console.log(`File [${path}] saved`);
}
