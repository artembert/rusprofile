import fs from "fs";
import { klerkDetailsRawPaths, klerkDetailsJSONPaths } from "../../config/paths";
import { RawDetails } from "../types/raw-details";
import { Details } from "../types/details";
import { parseRawDetailsFromKlerk } from "../components/parse-raw-details-from-klerk";
import { regionName } from "../../config/session-variables";

export function parseRawDetailsFromKlerkController() {
  const rawDetails: RawDetails[] = JSON.parse(
    fs.readFileSync(`${klerkDetailsRawPaths[regionName]}.json`, "utf8")
  ) as RawDetails[];
  const details: Details[] = parseRawDetailsFromKlerk(rawDetails);
  fs.writeFileSync(
    `${klerkDetailsJSONPaths[regionName]}.json`,
    JSON.stringify(details, undefined, 4)
  );
  console.log(`Details saved to ${klerkDetailsJSONPaths[regionName]}.json`);
}
