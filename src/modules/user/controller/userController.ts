import userRepo from "../repository/userRepo";
import { Request, Response } from "express";
import httpStatus from "http-status";

const registerUser = async (req:Request, res:Response): Promise<void>=>{
    try{
        const register = await userRepo.createUser(req.body);
        res.status(httpStatus.CREATED).json({
            message: "Account created successfully",
            data: {user: register}
        })
    }catch(error: any){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: error.message
        })
    }
}

export default {
    registerUser
}