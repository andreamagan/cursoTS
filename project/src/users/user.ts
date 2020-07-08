import { IUser } from "../models";

export enum userTypes {
  Google = 'google',
  Facebook = 'facebook',
  Linkedin = 'linkedin',
}

export class FacebookUser implements IUser {
  email: string;
  password: string;
  name: string;
  avatarPath: string ;
  friends: number;

constructor(
    email: string, 
    password: string, 
    name: string, 
    avatarPath?: string | undefined, 
    friends?: number | undefined
  ) {
      this.email = email;
      this.password = password;
      this.name = name;
      this.avatarPath = avatarPath ? avatarPath : 'default avatar path';
      this.friends = friends ? friends : 0;
  }
}

export class LinkedInUser implements IUser {
  email: string;
  password: string;
  name: string;
  job: string;
  company: string;

  constructor(
    email: string,
    password: string, 
    name: string, 
    job?: string, 
    company?: string
  ) {
      this.email = email;
      this.password = password;
      this.name = name;
      this.job = job ? job : 'open to work';
      this.company = company ? company : 'Default company';
  }
}

export class GoogleUser implements IUser {
  email: string;
  password: string;
  name: string;
  events: string[];

  constructor(
    email: string, 
    password: string, 
    name: string, 
    events?: string[]
  ) {
      this.email = email;
      this.password = password;
      this.name = name;
      this.events = events ? events : [];
  }
}