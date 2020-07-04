import { ISong } from "../models/song.model";
import { IUser } from "../models/user.model";
import { IPlaylist } from "../models/playlist.model";
import { Observable } from "../patterns/observer";


class PlaylistService extends Observable implements IPlaylist {
  songs: ISong[];
  users: IUser[];

  public addSong(song: ISong): IPlaylist {
    this.songs.push(song);
    return this;
  }

  public removeSong(song: ISong): IPlaylist {
    let songIndex: number = this.songs.findIndex(element => element === song); 
    this.songs.slice(songIndex);
    return this;
  }

  public addUser(user: IUser): IPlaylist {
    this.users.push(user);
    return this;
  }

  public removeUser(user: IUser): IPlaylist {
    let userIndex: number = this.users.findIndex(element => element === user);
    this.users.slice(userIndex);
    return this;
  }

  async process() {
    this.songs.forEach( (currentSong) => {
      this.notify(currentSong.title)
    })
  }
}