import { ISong } from "./song.model";
import { IUser } from "./user.model";

export interface IPlaylist {
  songs: ISong[];
  users: IUser[];
}