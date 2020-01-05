import {Parser} from "json2csv"

export function convertToCsv(dataObject: any): object {
  const json2csvParser = new Parser(Object.keys(dataObject[0]));
  return json2csvParser.parse(dataObject)
}
