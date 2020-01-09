import { detailsMarkupsPaths } from "../../config/paths";
import { getPage } from "../components/get-page";
import { writeMarkup } from "../write-markup";

export async function getDetailPage(region: string, id: string) {
  const filePath = getFilePath(region, id);
  const detailMarkup = await getPage(getUrl(id));
  await writeMarkup(filePath, detailMarkup);
}

function getFilePath(regionName: string, id: string): string {
  return `${detailsMarkupsPaths[regionName]}/${id}.html`;
}

function getUrl(id: string): string {
  return `https://www.rusprofile.ru/id/${id}`;
}
