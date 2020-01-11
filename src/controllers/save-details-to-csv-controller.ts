import fs from "fs";
import { getKlerkDetailsCSVPaths, getKlerkDetailsJSONPaths } from "../../config/paths";
import { Details } from "../types/details";
import { convertToCsv } from "../components/convert-to-csv";

export function saveDetailsToCsvController() {
  const details: Details[] = JSON.parse(
    fs.readFileSync(getKlerkDetailsJSONPaths(), "utf8")
  ) as Details[];
  fs.writeFileSync(
    getKlerkDetailsCSVPaths(),
    convertToCsv(details)
  );
  console.log(`Details saved to ${getKlerkDetailsCSVPaths()}`);
}
