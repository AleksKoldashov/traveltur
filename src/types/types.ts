export interface Root {
  gen_timestamp: number;
  pois: unknown[];
  hotels: Hotel[];
}

export interface Hotel {
  id: number;
  cityId: number;
  stars: number;
  pricefrom: number;
  rating: number;
  popularity: number;
  propertyType: number;
  checkIn?: string;
  checkOut?: string;
  distance: number;
  photoCount: number;
  photos: Photo[];
  photosByRoomType: PhotosByRoomType;
  yearOpened?: number;
  yearRenovated: unknown;
  cntRooms?: number;
  cntSuites: unknown;
  cntFloors?: number;
  facilities: number[];
  shortFacilities: string[];
  location: Location;
  name: Name;
  address: Address;
  link: string;
  poi_distance: PoiDistance;
}

export interface Photo {
  url: string;
  width: number;
  height: number;
}

export interface PhotosByRoomType {
  '9'?: number;
  '148'?: number;
  ''?: number;
  '1'?: number;
  '2'?: number;
  '3'?: number;
  '4'?: number;
  '11'?: number;
  '13'?: number;
  '17'?: number;
  '133'?: number;
  '12'?: number;
  '35'?: number;
}

export interface Location {
  lon: number;
  lat: number;
}

export interface Name {
  th?: string;
  en: string;
  zh?: string;
  de?: string;
  it?: string;
  fr?: string;
  es?: string;
}

export interface Address {
  de?: string;
  ru?: string;
  th?: string;
  en: string;
  it?: string;
  fr?: string;
  es?: string;
  zh?: string;
}

export type PoiDistance = object;
