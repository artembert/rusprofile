import { getRequestToKlerk } from "../components/make-request-to-klerk";
import * as fs from "fs";
import {
  companiesAnnotationsPaths,
  companiesDetailsPaths
} from "../../config/paths";
import { CompanyDetails } from "../types/company-details";

getDetailsFromKlerkController();

async function getDetailsFromKlerkController() {
  const companiesAnnotations: CompanyDetails[] = JSON.parse(
    fs.readFileSync(`${companiesAnnotationsPaths.kirovsk}.json`, "utf8")
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
}

function getUrl(INN: string | number): string {
  return `https://www.klerk.ru/yindex.php/v3/opendatasearch?inn=${INN}`;
}
