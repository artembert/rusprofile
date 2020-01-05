import fs from "fs";
import { companiesDetailsPaths } from "../../config/paths";

filterDetailsByInnController();

export function filterDetailsByInnController() {
  const details = JSON.parse(
    fs.readFileSync(`${companiesDetailsPaths.kirovsk}.json`, "utf8")
  );
  fs.writeFileSync(
    `${companiesDetailsPaths.kirovskFiltered}.json`,
    JSON.stringify(details.filter(details => !details.error), undefined, 4)
  );
  console.log(`Filtered details saved to ${companiesDetailsPaths.kirovskFiltered}`);
}
