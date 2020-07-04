"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const observer_1 = require("../patterns/observer");
class PlaylistService extends observer_1.Observable {
    addSong(song) {
        this.songs.push(song);
        return this;
    }
    removeSong(song) {
        let songIndex = this.songs.findIndex(element => element === song);
        this.songs.slice(songIndex);
        return this;
    }
    addUser(user) {
        this.users.push(user);
        return this;
    }
    removeUser(user) {
        let userIndex = this.users.findIndex(element => element === user);
        this.users.slice(userIndex);
        return this;
    }
    async process() {
        this.songs.forEach((currentSong) => {
            this.notify(currentSong.title);
        });
    }
}
