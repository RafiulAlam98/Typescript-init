import { Request, Response } from "express"
import { createUserToDb, getAdminUsersFromDB, getUserByIdFromDb, getUsersFromDb } from "./user.service"


//create user 
export const createUser =async (req:Request, res:Response) => {
        const data = req.body
        console.log(data)
        const user = await createUserToDb(data)
        res.status(200).json({
                status:"success",
                data:user
        })
      }


// get user
export const getUser =async (req:Request, res:Response,) => {
        const user = await getUsersFromDb()
        res.status(200).json({
                status:"success",
                data:user
        })
      }

      //get user by id
      export const getUserById = async(req:Request, res:Response)=>{
        const {id}= req.params
        const user = await getUserByIdFromDb(id)
        console.log("hitted by get user by id",id)
        res.status(200).json({
                status:"success",
                data:user
        })
      }


      export const getAdminUsers = async(req:Request, res:Response)=>{
        
        const user = await getAdminUsersFromDB()
        console.log(user)
        res.status(200).json({
                status:"success",
                data:user
        })
      }


//Route -> controller -> service