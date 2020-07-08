import { ISong, IUser, IPlaylist } from "../models";
import { Observable } from "../patterns/observer";
import { User } from "../patterns/user.adapter";

async function sleep(msec: any) {
  return new Promise(resolve => setTimeout(resolve, msec));
}

export class PlaylistService extends Observable implements IPlaylist {
  songs: ISong[] = [];
  users: IUser[] = [];

  public addSong(song: ISong): PlaylistService {
    this.songs.push(song);
    console.log(`PlaylistService: New song added
      Song info: 
        - ${song.title}
        - ${song.author}
        - ${song.genre}
        - ${song.duration}
    `);
    console.log(`Playlist songs:`)
    this.songs.forEach(song => {
      console.log(song.title);
    });

    return this;
  }

  public removeSong(song: ISong): PlaylistService {
    let songIndex: number = this.songs.findIndex(element => element === song); 
    this.songs.slice(songIndex);
    console.log(`Playlistservice: ${song.title} deleted`);
    return this;
  }

  public addUser(user: User): PlaylistService {
    this.users.push(user);
    this.addObserver(user);
    console.log(`PlaylistService: ${user.name} is follow this playlist`);
    return this;
  }

  public removeUser(user: User): PlaylistService {
    let userIndex: number = this.users.findIndex(element => element === user);
    this.users.slice(userIndex);
    this.deleteObserver(user);
    console.log(`PlaylistService: ${user.name} is remove from this playlist`)
    return this;
  }

  async process() {
    console.log('Playlist starts....');
    for (let i = 0; i < this.songs.length; i++) {
      await (async () => {
        let date = new Date();
        console.log(
          `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} Playing ${this.songs[i].title}`);
        await sleep(this.songs[i].duration);
      })();
    }
    console.log('Playlist ends!');
  }
}