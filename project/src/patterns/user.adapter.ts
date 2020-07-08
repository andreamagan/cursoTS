import { IUser } from "../models";
import { Observer } from "./observer";

export class User implements IUser, Observer {
  name: string;
  email: string;
  password: string

  public constructor(someUser: IUser) {
      this.email = someUser.email;
      this.name = someUser.name;
  }

  async update(object: any) {
      console.log(`now playing ${object}...`);
  }
}
