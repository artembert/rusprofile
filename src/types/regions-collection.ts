import { Region } from "./region";
import { Details } from "./details";

export type RegionsCollection = {
  [key in Region]?: Details[];
};
