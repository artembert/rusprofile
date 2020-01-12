import { Region, regionsLowerCase } from "../types/region";
import { Details } from "../types/details";
import fs from "fs";
import { getKlerkDetailsJSONPaths, getRegionCollectionJSONFilePaths } from "../../config/paths";
import { promisify } from "util";

const readFile = promisify(fs.readFile);

getLargestEnterprisesController();

export async function getLargestEnterprisesController(): Promise<void> {
  const regionsCollection: RegionsCollection = {};
  for (let regionName of regionsLowerCase) {
    regionsCollection[regionName] = JSON.parse(
      await readFile(getKlerkDetailsJSONPaths(regionName), "utf8")
    ) as Details[];
  }
  fs.writeFileSync(
    getRegionCollectionJSONFilePaths(),
    JSON.stringify(regionsCollection, undefined, 4)
  );
  console.log(`Regions collection saved to ${getRegionCollectionJSONFilePaths()}`);
}

type RegionsCollection = {
  [key in Region]?: Details[]
}
