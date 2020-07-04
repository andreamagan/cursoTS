export enum Genre {
  Reggeton,
  Pop,
  Trap,
  Rock,
  Metal,
  Classic,
  Unknown
}

export interface ISong {
  title: string;
  author: string;
  duration: number;
  genre: Genre
}