import fs from "fs";
import { companiesDetailsPaths, detailsTreatedPaths } from "../../config/paths";
import { RawDetails } from "../types/raw-details";
import { Details } from "../types/details";
import { parseRawDetailsFromKlerk } from "../components/parse-raw-details-from-klerk";

parseRawDetailsFromKlerkController();

export function parseRawDetailsFromKlerkController() {
  const rawDetails: RawDetails[] = JSON.parse(
    fs.readFileSync(`${companiesDetailsPaths.kirovskFiltered}.json`, "utf8")
  ) as RawDetails[];
  const details: Details[] = parseRawDetailsFromKlerk(rawDetails);
  fs.writeFileSync(
    `${detailsTreatedPaths.kirovsk}.json`,
    JSON.stringify(details, undefined, 4)
  );
  console.log(`Details saved to ${detailsTreatedPaths.kirovsk}.json`);
}
