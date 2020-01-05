import fs from "fs";
import { detailsTreatedPaths } from "../../config/paths";
import { Details } from "../types/details";
import { convertToCsv } from "../components/convert-to-csv";

saveDetailsToCsv();

function saveDetailsToCsv() {
  const details: Details[] = JSON.parse(
    fs.readFileSync(`${detailsTreatedPaths.kirovsk}.json`, "utf8")
  ) as Details[];
  fs.writeFileSync(`${detailsTreatedPaths.kirovsk}.csv`, convertToCsv(details));
  console.log(`Details saved to ${detailsTreatedPaths.kirovsk}.json`);
}
