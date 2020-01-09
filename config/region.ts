import { Region } from "../src/types/region";
import { QueryProps, regionQuery } from "./rusprofile-query";

export const regionName: Region = "roshhino";
export const region: QueryProps = regionQuery.get(regionName)[0];