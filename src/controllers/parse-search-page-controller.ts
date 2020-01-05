import {
  companiesAnnotationsPaths,
  markupFoldersPaths
} from "../../config/paths";
import { getFilenamesFromFolder } from "../components/get-filenames-from-folder";
import { getINNsFromSearchPage } from "../components/get-inns-from-search-page";
import fs from "fs";

const markupPath = markupFoldersPaths.kirovsk;
const companiesAnnotationsPath = companiesAnnotationsPaths.kirovsk + ".json";

parseSearchPageController(markupPath, companiesAnnotationsPath);

async function parseSearchPageController(
  markupPath: string,
  annotationsPath: string
) {
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
    } items: [${allCompaniesAnnotation.slice(0, 3).join(", ")}...]`
  );

  fs.writeFileSync(
    annotationsPath,
    JSON.stringify(allCompaniesAnnotation, undefined, 4)
  );
  console.log(`Annotations saved to ${annotationsPath}`);
}
