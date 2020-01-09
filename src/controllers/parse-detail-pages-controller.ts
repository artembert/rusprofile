import { detailsMarkupsPaths } from "../../config/paths";
import { parseDetailPage } from "../components/parse-detail-page";

const IDs: string[] = ["6897533"];

parseDetailPagesController();

export function parseDetailPagesController() {
  IDs.forEach(ID => {
    const detailsFilePath = `${detailsMarkupsPaths.kirovsk}/${ID}.html`;
    const details = parseDetailPage(detailsFilePath, ID);
    console.log(details);
  })
}
