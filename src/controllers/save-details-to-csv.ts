import fs from "fs";
import { klerkDetailsPaths } from "../../config/paths";
import { Details } from "../types/details";
import { convertToCsv } from "../components/convert-to-csv";

saveDetailsToCsv();

function saveDetailsToCsv() {
  const details: Details[] = JSON.parse(
    fs.readFileSync(`${klerkDetailsPaths.kirovsk}.json`, "utf8")
  ) as Details[];
  fs.writeFileSync(`${klerkDetailsPaths.kirovsk}.csv`, convertToCsv(details));
  console.log(`Details saved to ${klerkDetailsPaths.kirovsk}.json`);
}
