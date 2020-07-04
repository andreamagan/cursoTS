"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = void 0;
const song_model_1 = require("../models/song.model");
class Song {
    constructor(title, duration, author, genre) {
        this.title = title;
        this.author = author ? author : 'Unknown Author';
        this.duration = duration;
        this.genre = genre ? genre : song_model_1.Genre.Unknown;
    }
}
exports.Song = Song;
