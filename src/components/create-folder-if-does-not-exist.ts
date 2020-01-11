import fs from "fs";

export function createFolderIfDoesNotExist(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log(`create directory "${dir}"`);
  }
}
