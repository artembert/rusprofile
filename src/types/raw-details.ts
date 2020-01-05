export interface RawDetails {
  id:      number;
  orgname: string;
  inn:     string;
  data:    Data;
}

export interface Data {
  ssch?:       Chargedebt;
  revexp?:     Revexp;
  paytax?:     Chargedebt;
  snr?:        Snr;
  smsp?:       Smsp;
  chargedebt?: Chargedebt;
  violations?: Chargedebt;
}

export interface Chargedebt {
  docid:     string;
  docdate:   string;
  statedate: string;
  debt?:     Debt[];
  taxes?:    Tax[];
  count?:    string;
  charged?:  string;
}

export interface Debt {
  taxname:     string;
  overalldebt: string;
  taxdebt:     string;
  penalty:     string;
  charge:      string;
}

export interface Tax {
  name: string;
  summ: string;
}

export interface Revexp {
  docid:     string;
  docdate:   string;
  statedate: string;
  rev:       string;
  exp:       string;
}

export interface Smsp {
  docid:            string;
  statedate:        string;
  reedate:          string;
  vid:              string;
  category:         string;
  new:              string;
  shortname:        null | string;
  placeinfo:        string;
  okved_main:       Okved[];
  okved_additional: Okved[];
  licenses:         License[];
  goods:            Good[];
  partners:         any[];
  contracts44:      Contracts[];
  contracts223:     Contracts[];
}

export interface Contracts {
  contraname: string;
  contrainn:  string;
  predmet:    null | string;
  reenum:     string;
  date:       string;
}

export interface Good {
  code:   string;
  name:   string;
  hitech: string;
}

export interface License {
  ser:       null;
  num:       string;
  vid:       null;
  date:      string;
  startdate: string;
  enddate:   null | string;
  orgissued: null;
  stopdate:  null;
  stoporg:   null;
  vids:      string[];
  addrs:     string[];
}

export interface Okved {
  code: string;
  name: string;
}

export interface Snr {
  docid:     string;
  docdate:   string;
  statedate: string;
  usno:      string;
  eshn:      string;
  envd:      string;
  srp:       string;
}
