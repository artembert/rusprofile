import { linksPaths, markupFoldersPaths } from "../../config/paths";
import { getLinksFromSearchPage } from "../components/get-links-from-search-page";
import { getFilenamesFromFolder } from "../components/get-filenames-from-folder";
import fs from "fs";
import { regionName } from "../../config/region";

const markupPath = markupFoldersPaths[regionName];
const linksPath = linksPaths[regionName] + ".json";

getLinksFromSearchPagesController(markupPath, linksPath);

async function getLinksFromSearchPagesController(markupPath: string, linksPath: string) {
  const markupFilenames: string[] = await getFilenamesFromFolder(markupPath);
  const links: string[] = markupFilenames.reduce((accumulator, fileName) => {
    const links = getLinksFromSearchPage(`${markupPath}/${fileName}`);
    accumulator.push(...links);
    return accumulator;
  }, []);
  console.log(`Saved links, ${links.length} items: [${links.slice(0, 3).join(", ")}...]`);

  fs.writeFileSync(linksPath, JSON.stringify(links, undefined, 4));
  console.log(`Links saved to ${linksPath}`);
}
