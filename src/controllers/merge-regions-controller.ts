import { regionsGroups } from "../../config/regions-groups";
import { Details } from "../types/details";
import fs from "fs";
import { getKlerkDetailsJSONPaths } from "../../config/paths";

mergeRegionsController();

export async function mergeRegionsController(): Promise<void> {
  for (let group of regionsGroups) {
    const regionDetails: Details[] = [];
    for (let regionName of group.children) {
      const details: Details[] = JSON.parse(
        fs.readFileSync(getKlerkDetailsJSONPaths(regionName), "utf8")
      ) as Details[];
      regionDetails.push(...details);
    }
    fs.writeFileSync(
      getKlerkDetailsJSONPaths(group.commonName),
      JSON.stringify(regionDetails, undefined, 4)
    );
    console.log(`Details saved to ${getKlerkDetailsJSONPaths(group.commonName)}`);
  }
}
