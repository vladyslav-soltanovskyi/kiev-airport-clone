interface Airline {
  en: AirlineInfo;
  ua: AirlineInfo;
}

export interface AirlineInfo {
  name: string;
  logoName?: string;
}

export interface DtoFlightInfo {
  ID: number;
  airline: Airline;
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
  airline: Airline;
  flightNum: string;
  city: {
    en: string;
    uk: string; 
  };
  time: string;
  term: string;
  status: string;
}