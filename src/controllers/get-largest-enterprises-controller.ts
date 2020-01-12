import { Region, regionsLowerCase } from "../types/region";
import { Details } from "../types/details";
import fs from "fs";
import {
  getEnterprisesCollectionJSONFilePaths,
  getKlerkDetailsJSONPaths,
  getRegionCollectionJSONFilePaths
} from "../../config/paths";
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
  for (const regionName in regionsCollection) {
    (regionsCollection[regionName] as Details[]) = regionsCollection[regionName]
      .filter(details => !!details.employees)
      .sort(sortEnterprisesByEmployees)
      .map(details => shortenEnterpriseName(details))
      .slice(0, 4);
  }
  fs.writeFileSync(
    getRegionCollectionJSONFilePaths(),
    JSON.stringify(regionsCollection, undefined, 4)
  );
  console.log(
    `Regions Collection saved to ${getEnterprisesCollectionJSONFilePaths()}`
  );

  const enterprisesCollection: EnterprisesCollection = {};
  for (const regionName in regionsCollection) {
    const enterprises = (regionsCollection[regionName] as Details[]).map(
      details => details.org_name
    );
    console.log("enterprises", enterprises);
    (enterprisesCollection[regionName] as string[]) = enterprises;
  }
  fs.writeFileSync(
    getEnterprisesCollectionJSONFilePaths(),
    JSON.stringify(enterprisesCollection, undefined, 4)
  );
  console.log(
    `Largest enterprises saved to ${getEnterprisesCollectionJSONFilePaths()}`
  );
}

function sortEnterprisesByEmployees(a: Details, b: Details): number {
  if (a.employees > b.employees) {
    return -1;
  }
  if (a.employees < b.employees) {
    return 1;
  }
  return 0;
}

function shortenEnterpriseName(enterprise: Details): Details {
  return {
    ...enterprise,
    org_name: enterprise.org_name
      .replace("ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ", "ООО")
      .replace("АКЦИОНЕРНОЕ ОБЩЕСТВО", "АО")
  };
}

type RegionsCollection = {
  [key in Region]?: Details[];
};

type EnterprisesCollection = {
  [key in Region]?: string[];
};
