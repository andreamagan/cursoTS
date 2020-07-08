import { UserFactory } from "./patterns/user.factory"
import { userTypes } from "./users/user";
import { Song } from "./playlists/song";
import { Genre } from "./models";
import { PlaylistService } from "./playlists/playlist";
import { User } from "./patterns/user.adapter";

(async () => {
// registrar usuarios
let userFactory = new UserFactory();

let newFBUser: User = userFactory.register('Juan', 'user@user.com', 'password', userTypes.Facebook);
let newINUser: User = userFactory.register('María', 'user@user.com', 'password', userTypes.Linkedin);
let newGoogleUser: User = userFactory.register('Luis', 'user@user.com', 'password', userTypes.Google);

// crear canciones
let popSong: Song = new Song('pop song', 20000, 'Pepe', Genre.Pop);
let rockSong: Song = new Song('rock song', 12000, '', Genre.Rock);
let reggaetonSong: Song = new Song('reggeton', 18000, 'Bob');

// crear playlist
let playlist = new PlaylistService();

// añadir los usuarios a la playlist
console.log('-> Add users');
playlist.addUser(newFBUser).addUser(newINUser);


// añadir canciones playlist
console.log('-> Add songs');
playlist.addSong(popSong).addSong(rockSong);

// añadir canciones y usuarios
playlist.addSong(reggaetonSong).addUser(newGoogleUser);

// process
playlist.process();
})();