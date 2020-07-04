import { ISong, Genre } from "../models/song.model";

export class Song implements ISong {
  title: string;
  author: string;
  duration: number;
  genre: Genre;
  
  constructor(
    title: string,
    duration: number,
    author?: string,
    genre?: Genre
  ){
    this.title = title;
    this.duration = duration;
    this.author = author ? author : 'Unknown Author';
    this.genre = genre ? genre : Genre.Unknown;
  }
}