import { IUser } from "../models";
import { User } from "./user.adapter";
import { FacebookUser, GoogleUser, LinkedInUser, userTypes } from "../users/user";


export interface IUserFactory {
  login(email: string, password: string, type: string): IUser | void;
  register(email: string, password: string, name: string): IUser | void;
}

abstract class AbstractFactory <T extends IUser> implements IUserFactory {
  users: T[] = [];

  public login(email: string, password: string): T {
      for (let i = 0; i < this.users.length; i++) {
          if ((this.users[i].email === email) && (this.users[i].password === password)) {
              return this.users[i];
          }
      }
      throw new Error("User does not exists");
  }

  abstract register(email: string, password: string, name: string): User; 
}

class FacebookUsersFactory extends AbstractFactory<FacebookUser> {
  users: FacebookUser[] = [];

  public register(email: string, password: string, name: string) {
      let newFacebookUser: FacebookUser = new FacebookUser(email, password, name);
      this.users.push(newFacebookUser);

      console.log(`${name} has been registered at facebook`);
      return new User(newFacebookUser);
  }
}

class LinkedInUsersFactory extends AbstractFactory<LinkedInUser> {
  users: LinkedInUser[] = [];

  public register(email: string, password: string, name: string) {
      let newLinkedinUser: LinkedInUser = new LinkedInUser(email, password, name)
      this.users.push(newLinkedinUser);
      
      console.log(`${name} has been registered at linkedin`);
      return new User(newLinkedinUser);
  }
}

class GoogleUsersFactory extends AbstractFactory<GoogleUser> implements IUserFactory {
  users: GoogleUser[] = [];

  public register(email: string, password: string, name: string, events? : string[]) {
      let newGoogleUser: GoogleUser = new GoogleUser(email, password, name, events);
      
      console.log(`${name} has been registered at google`);
      return new User(newGoogleUser);
    }
}

export class UserFactory {
  public register( name: string, email: string, password: string, type: userTypes): User  {
    switch (type) {
      case 'google':
        return new GoogleUsersFactory().register(email, password, name);
      case 'facebook':
        return new FacebookUsersFactory().register(email, password, name);
      case 'linkedin':
        return new LinkedInUsersFactory().register(email, password, name);
      default:
        console.log('Login method not available');
    }
  }

  public login(email: string, password: string, type: userTypes): User  {
    switch (type) {
      case 'google':
        return new User(new GoogleUsersFactory().login(email, password));
      case 'facebook':
        return new User(new FacebookUsersFactory().login(email, password));
      case 'linkedin':
        return new User(new LinkedInUsersFactory().login(email, password));
      default:
        console.log('Login method not available');
    }
  }

}