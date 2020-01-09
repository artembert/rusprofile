import fs from "fs";
import { klerkDetailsCSVPaths, klerkDetailsJSONPaths } from "../../config/paths";
import { Details } from "../types/details";
import { convertToCsv } from "../components/convert-to-csv";

saveDetailsToCsv();

function saveDetailsToCsv() {
  const details: Details[] = JSON.parse(
    fs.readFileSync(`${klerkDetailsJSONPaths.kirovsk}.json`, "utf8")
  ) as Details[];
  fs.writeFileSync(`${klerkDetailsCSVPaths.kirovsk}.csv`, convertToCsv(details));
  console.log(`Details saved to ${klerkDetailsCSVPaths.kirovsk}.csv`);
}
