import fs from "fs";
import { klerkDetailsRawPaths, klerkDetailsPaths } from "../../config/paths";
import { RawDetails } from "../types/raw-details";
import { Details } from "../types/details";
import { parseRawDetailsFromKlerk } from "../components/parse-raw-details-from-klerk";

parseRawDetailsFromKlerkController();

export function parseRawDetailsFromKlerkController() {
  const rawDetails: RawDetails[] = JSON.parse(
    fs.readFileSync(`${klerkDetailsRawPaths.kirovskFiltered}.json`, "utf8")
  ) as RawDetails[];
  const details: Details[] = parseRawDetailsFromKlerk(rawDetails);
  fs.writeFileSync(
    `${klerkDetailsPaths.kirovsk}.json`,
    JSON.stringify(details, undefined, 4)
  );
  console.log(`Details saved to ${klerkDetailsPaths.kirovsk}.json`);
}
