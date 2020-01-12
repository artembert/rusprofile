import { Region } from "../src/types/region";

interface RegionGroup {
  commonName: Region;
  children: Region[];
}

export const regionsGroups: RegionGroup[] = [
  {
    commonName: "lebjazhe",
    children: ["lebjazhe-188517", "lebjazhe-188532", "lebjazhe-188535"]
  },
  {
    commonName: "sestroreck",
    children: ["sestroreck-197701", "sestroreck-197706"]
  },
  {
    commonName: "petergof",
    children: [
      "petergof-198504",
      "petergof-198510",
      "petergof-198515",
      "petergof-198516",
      "petergof-198517"
    ]
  },
  {
    commonName: "pavlovsk",
    children: ["pavlovsk-196620", "pavlovsk-196621"]
  }
];
