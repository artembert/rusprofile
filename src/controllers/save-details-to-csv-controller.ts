import fs from "fs";
import {
  klerkDetailsCSVPaths,
  klerkDetailsJSONPaths
} from "../../config/paths";
import { Details } from "../types/details";
import { convertToCsv } from "../components/convert-to-csv";
import { regionName } from "../../config/session-variables";

export function saveDetailsToCsvController() {
  const details: Details[] = JSON.parse(
    fs.readFileSync(`${klerkDetailsJSONPaths[regionName]}.json`, "utf8")
  ) as Details[];
  fs.writeFileSync(
    `${klerkDetailsCSVPaths[regionName]}.csv`,
    convertToCsv(details)
  );
  console.log(`Details saved to ${klerkDetailsCSVPaths[regionName]}.csv`);
}
