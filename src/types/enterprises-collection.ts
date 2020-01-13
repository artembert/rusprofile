import { Region } from "./region";

export type EnterprisesCollection = {
  [key in Region]?: string[];
};
