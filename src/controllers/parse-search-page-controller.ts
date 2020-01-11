import { getMarkupFoldersPath, getSearchPageDetailsPaths } from "../../config/paths";
import { getFilenamesFromFolder } from "../components/get-filenames-from-folder";
import { getINNsFromSearchPage } from "../components/get-inns-from-search-page";
import fs from "fs";

export async function parseSearchPageController() {
  const markupPath = getMarkupFoldersPath();
  const annotationsPath = getSearchPageDetailsPaths();
  const markupFileNames: string[] = await getFilenamesFromFolder(markupPath);
  const allCompaniesAnnotation: string[] = markupFileNames.reduce(
    (accumulator, fileName) => {
      const companiesAnnotation = getINNsFromSearchPage(
        `${markupPath}/${fileName}`
      );
      accumulator.push(...companiesAnnotation);
      return accumulator;
    },
    []
  );

  console.log(
    `Saved companies annotations, ${
      allCompaniesAnnotation.length
    } items: [${allCompaniesAnnotation.slice(0, 3).map(item => JSON.stringify(item)).join(", ")}...]`
  );

  fs.writeFileSync(
    annotationsPath,
    JSON.stringify(allCompaniesAnnotation, undefined, 4)
  );
  console.log(`Annotations saved to ${annotationsPath}`);
}
