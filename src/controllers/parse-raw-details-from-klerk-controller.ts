import fs from "fs";
import { getKlerkDetailsJSONPaths, getKlerkDetailsRawPath } from "../../config/paths";
import { RawDetails } from "../types/raw-details";
import { Details } from "../types/details";
import { parseRawDetailsFromKlerk } from "../components/parse-raw-details-from-klerk";

export function parseRawDetailsFromKlerkController() {
  const rawDetails: RawDetails[] = JSON.parse(
    fs.readFileSync(getKlerkDetailsRawPath(), "utf8")
  ) as RawDetails[];
  const details: Details[] = parseRawDetailsFromKlerk(rawDetails);
  fs.writeFileSync(
    getKlerkDetailsJSONPaths(),
    JSON.stringify(details, undefined, 4)
  );
  console.log(`Details saved to ${getKlerkDetailsJSONPaths()}`);
}
