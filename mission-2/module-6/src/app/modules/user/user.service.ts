import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload:IUser):Promise<IUser> =>{
        const user = await new User(payload)

        // User -> class 
        // user -> instance
        // user.save -> built in method by mongoose
        // custom instance method

              await user.save();
              console.log(user.fullName())
              
              user.fullName() //custom instance method
              return user
      }

export const getUsersFromDb = async():Promise<IUser[]> =>{
        const users = await User.find()
        return users
}

export const getUserByIdFromDb = async(payload:string|null):Promise<IUser | null> =>{
        const user = await User.findOne({id:payload},{name:1})
        return user
}

export const getAdminUsersFromDB = async() =>{
       const admins = await User.getAdminUsers()
       return admins

}
