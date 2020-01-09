import { getRequestToKlerk } from "../components/make-request-to-klerk";
import * as fs from "fs";
import {
  companiesAnnotationsPaths,
  companiesDetailsPaths
} from "../../config/paths";
import { Details } from "../types/details";
import { regionName } from "../../config/region";

getDetailsFromKlerkController();

async function getDetailsFromKlerkController() {
  const companiesAnnotations: Details[] = JSON.parse(
    fs.readFileSync(`${companiesAnnotationsPaths[regionName]}.json`, "utf8")
  );
  const INNs = companiesAnnotations.map(company => company.INN);

  const companies = [];
  for (const [index, INN] of INNs.entries()) {
    console.log(`INN: #${index} :`, INN);
    companies.push(await getRequestToKlerk(getUrl(INN)));
    if (index && index % 100 === 0) {
      fs.writeFileSync(
        `${companiesDetailsPaths.kirovsk}.json`,
        JSON.stringify(companies, undefined, 4)
      );
    }
  }
  fs.writeFileSync(
    `${companiesDetailsPaths.kirovsk}.json`,
    JSON.stringify(companies, undefined, 4)
  );
  fs.writeFileSync(
    `${companiesDetailsPaths.kirovskFiltered}.json`,
    JSON.stringify(companies.filter(details => !details.error))
  )
}

function getUrl(INN: string | number): string {
  return `https://www.klerk.ru/yindex.php/v3/opendatasearch?inn=${INN}`;
}
