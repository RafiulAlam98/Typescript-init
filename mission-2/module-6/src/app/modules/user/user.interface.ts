import { HydratedDocument, Model } from "mongoose";

export interface IUser {
        id:string
        role:"student"
        password:string
        name:{
                firstName:string,
                lastName:string
                middleName?:string
        }
        dateOfBirth?:string,
        gender:"male" | "female"
        email?:string
        contactNo:string
        emergencyContactNo:string
        presentAddress:string
        permannetAddress:string

}


//  instance methods in this interface:
export interface IUserMethods {
        fullName(): string;
      }


      export interface UserModel extends Model<IUser, {}, IUserMethods> {
     getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
      }