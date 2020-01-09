import fs from "fs";
import { promisify } from "util";

const readdir = promisify(fs.readdir);

export async function getFilenamesFromFolder(folderPath: string) {
  return await readdir(folderPath);
}
