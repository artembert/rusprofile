import fs from "fs";
import { promisify } from "util";
import { getLinksPath } from "../../config/paths";
import { getDetailPage } from "./get-detail-page";

const readFile = promisify(fs.readFile);
const regionName = "kirovsk";

getRegionDetailPages();

async function getRegionDetailPages() {
  const rawLinks = await readFile(getLinksPath(), "utf8");
  const links = (JSON.parse(rawLinks) as string[]);
  for (const [index, link] of links.entries()) {
    console.log(`Link: #${index} :`, link);
    await getDetailPage(regionName, link);
  }
}
