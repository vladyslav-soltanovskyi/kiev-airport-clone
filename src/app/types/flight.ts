interface DtoAirline {
  en: DtoAirlineInfo;
  ua: DtoAirlineInfo;
}

interface RecievAirline {
  en: DtoAirlineInfo;
  uk: DtoAirlineInfo;
}

export interface DtoAirlineInfo {
  name: string;
  logoName?: string;
}

export interface DtoFlightInfo {
  ID: number;
  airline: DtoAirline;
  ['carrierID.IATA']: string;
  ['carrierID.code']: string;
  fltNo: string;
  term: string;
}

export interface DtoArrival extends DtoFlightInfo {
  ['airportFromID.city']: string;
  ['airportFromID.city_en']: string;
  timeToStand: string;
  timeLandFact: string;
}

export interface DtoDeparture extends DtoFlightInfo {
  ['airportToID.city']: string;
  ['airportToID.city_en']: string;
  timeTakeofFact: string;
  timeDepShedule: string;
}

export interface DtoFlights {
  body: {
    arrival: DtoArrival[];
    departure: DtoDeparture[];
  };
  error: {
    code: number;
  }
}

export interface RecievFlightInfo {
  id: number;
  airline: RecievAirline;
  flightNum: string;
  city: {
    en: string;
    uk: string; 
  };
  time: string;
  term: string;
  status: string;
}