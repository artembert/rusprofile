import { RawDetails } from "../types/raw-details";
import { Details } from "../types/details";

export function parseRawDetailsFromKlerk(rawDetails: RawDetails[]): Details[] {
  return rawDetails.map(company => {
    return {
      INN: company.inn,
      okved_main_code: company.data?.smsp?.okved_main[0]?.code,
      okved_main_name: company.data?.smsp?.okved_main[0]?.name,
      short_name: company.data?.smsp?.shortname,
      place_info: company.data?.smsp?.placeinfo,
      employees: +company.data?.ssch?.count,
      revenue: +company.data?.revexp?.rev,
      expenses: +company.data?.revexp?.exp,
      revenue_date: company.data?.revexp?.statedate,
      org_name: company.orgname
    };
  });
}
