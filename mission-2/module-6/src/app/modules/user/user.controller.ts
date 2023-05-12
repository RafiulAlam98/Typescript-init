import { Request, Response } from "express"
import { createUserToDb, getUsersFromDb } from "./user.service"

export const createUser =async (req:Request, res:Response,) => {

        const user = await createUserToDb()
        res.status(200).json({
                status:"success",
                data:user
        })
      }

export const getUser =async (req:Request, res:Response,) => {

        const user = await getUsersFromDb()
        res.status(200).json({
                status:"success",
                data:user
        })
      }




//Route -> controller -> service