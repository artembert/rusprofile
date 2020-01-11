import fs from "fs";
import {
  getKlerkDetailsJSONPaths,
  getKlerkDetailsRawPath,
  getSearchPageDetailsPath
} from "../../config/paths";
import { regionName } from "../../config/session-variables";

export function printStatisticsController() {
  const rusprofileEnterprisesCount: number = JSON.parse(
    fs.readFileSync(getSearchPageDetailsPath(), "utf8")
  ).length;
  const klerkEnterprisesCount: number = JSON.parse(
    fs.readFileSync(getKlerkDetailsRawPath(), "utf8")
  ).length;
  const savedEnterprisesCount: number = JSON.parse(
    fs.readFileSync(getKlerkDetailsJSONPaths(), "utf8")
  ).length;
  console.log(`
  Region: ${regionName}
  Rusprofile: ${rusprofileEnterprisesCount}
  Klerk:      ${klerkEnterprisesCount}
  Saved:      ${savedEnterprisesCount}`
  );
}
