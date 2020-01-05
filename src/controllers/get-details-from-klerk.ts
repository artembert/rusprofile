import { getRequestToKlerk } from "../components/make-request-to-klerk";

const INNs = ["4706022684"];

getDetailsFromKlerk();

async function getDetailsFromKlerk() {
  for (const INN of INNs) {
    console.log(await getRequestToKlerk(getUrl(INN)));
  }
}

function getUrl(INN: string): string {
  return `https://www.klerk.ru/yindex.php/v3/opendatasearch?inn=${INN}`;
}
