import { Region } from "../src/types/region";
import { QueryProps, regionQuery } from "./rusprofile-query";

export const regionName: Region = "shlisselburg";
export const region: QueryProps = regionQuery.get(regionName)[0];
export const pageNumber: number = 1;
