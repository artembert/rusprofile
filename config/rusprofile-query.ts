import { Region } from "../src/types/region";

type RegionQuery = {
  [key in Region]?: string;
};

export interface QueryProps {
  query: string;
  pages: number;
}

export function getRusprofileQuery(regionName: Region, pageNumber: number): string {
  return getSearchPrefix(pageNumber) + regionQuery.get(regionName)[0].query;
}

export const regionQuery: Map<Region, QueryProps[]> = new Map([
  [
    "kirovsk",
    [
      {
        query:
          "?query=%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%2C+%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%2C+%D0%B3%D0%BE%D1%80%D0%BE%D0%B4+%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA&type=ul&search_inactive=2",
        pages: 10
      }
    ]
  ],
  [
    "roshhino",
    [
      {
        query: "?query=188820&type=ul&search_inactive=2",
        pages: 3
      },
      {
        query: "?query=188830&type=ul&search_inactive=2",
        pages: 1
      },
      {
        query: "?query=188831&type=ul&search_inactive=2",
        pages: 1
      },
      {
        query: "?query=188850&type=ul&search_inactive=2",
        pages: 1
      },
      {
        query: "?query=188851&type=ul&search_inactive=2",
        pages: 1
      }
    ]
  ],
  [
    "shlisselburg",
    [
      {
        query:
          "?query=%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%2C+%D1%88%D0%BB%D0%B8%D1%81%D1%81%D0%B5%D0%BB%D1%8C%D0%B1%D1%83%D1%80%D0%B3&type=ul&search_inactive=2",
        pages: 2
      }
    ]
  ],
  [
    "otradnoe",
    [
      {
        query:
          "?query=%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%2C+%D0%B3%D0%BE%D1%80%D0%BE%D0%B4+%D0%9E%D1%82%D1%80%D0%B0%D0%B4%D0%BD%D0%BE%D0%B5%2C&type=ul&search_inactive=2",
        pages: 3
      }
    ]
  ],
  [
    "mga",
    [
      {
        query: "?query=187300&type=ul&search_inactive=2",
        pages: 2
      }
    ]
  ],
  [
    "sestroreck-197706",
    [
      {
        query: "?query=197706&type=ul&search_inactive=2",
        pages: 6
      }
    ]
  ],
  [
    "sestroreck-197701",
    [
      {
        query: "?query=197701&type=ul&search_inactive=2",
        pages: 2
      }
    ]
  ],
  [
    "sosnovyj-bor",
    [
      {
        query: "?query=188540&type=ul&search_inactive=2",
        pages: 4
      }
    ]
  ],
  [
    "krasnoe-selo",
    [
      {
        query: "?query=198320&type=ul&search_inactive=2",
        pages: 10
      }
    ]
  ],
  [
    "pavlovo",
    [
      {
        query: "?query=187323&type=ul&search_inactive=2",
        pages: 1
      }
    ]
  ],
  [
    "petergof-198504",
    [
      {
        query: "?query=198504&type=ul&search_inactive=2",
        pages: 4
      }
    ]
  ],
  [
    "petergof-198510",
    [
      {
        query: "?query=198510&type=ul&search_inactive=2",
        pages: 4
      }
    ]
  ],
  [
    "petergof-198515",
    [
      {
        query: "?query=198515&type=ul&search_inactive=2",
        pages: 3
      }
    ]
  ],
  [
    "petergof-198516",
    [
      {
        query: "?query=198516&type=ul&search_inactive=2",
        pages: 4
      }
    ]
  ],
  [
    "petergof-198517",
    [
      {
        query: "?query=198517&type=ul&search_inactive=2",
        pages: 1
      }
    ]
  ],
  [
    "priladozhskij",
    [
      {
        query: "?query=187326&type=ul&search_inactive=2",
        pages: 1
      }
    ]
  ],
  [
    "lebjazhe-188517",
    [
      {
        query: "?query=188517&type=ul&search_inactive=2",
        pages: 1
      }
    ]
  ],
  [
    "lebjazhe-188532",
    [
      {
        query: "?query=188532&type=ul&search_inactive=2",
        pages: 1
      }
    ]
  ],
  [
    "lebjazhe-188535",
    [
      {
        query: "?query=188535&type=ul&search_inactive=2",
        pages: 1
      }
    ]
  ],
  [
    "sinjavino",
    [
      {
        query: "?query=187322&type=ul&search_inactive=2",
        pages: 1
      }
    ]
  ],
  [
    "novosele",
    [
      {
        query: "?query=188507&type=ul&search_inactive=2",
        pages: 2
      }
    ]
  ],
  [
    "bolshaja-izhora",
    [
      {
        query: "?query=188531&type=ul&search_inactive=2",
        pages: 1
      }
    ]
  ],
  [
    "villozi",
    [
      {
        query: "?query=188508&type=ul&search_inactive=2",
        pages: 5
      }
    ]
  ]
]);

function getSearchPrefix(pageNumber: number): string {
  if (pageNumber > 1) {
    return `https://www.rusprofile.ru/search/${pageNumber}`;
  }
  return "https://www.rusprofile.ru/search";
}
