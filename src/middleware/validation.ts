import { Request, Response, NextFunction } from "express"
import userRepo from "../modules/user/repository/userRepo";
import httpStatus from "http-status"
import { comparePassword } from "../helpers/index";
import { ExtendRequest } from "../types";


const isUserExist = async (req: Request, res: Response, next: NextFunction): Promise<void | any> => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(httpStatus.BAD_REQUEST).json({
                status: httpStatus.BAD_REQUEST,
                error: "please enter email and password"
            })
        }
        const userExists = await userRepo.findUserByAttributes("email", req.body.email)

        if (userExists) {
            return res.status(httpStatus.CONFLICT).json({
                status: httpStatus.CONFLICT,
                error: "account already exist, please login"
            })
        }

        return next();
    } catch (error: any) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: error.message
        })
    }
}

const verifyUser = async (req: ExtendRequest, res: Response, next: NextFunction) : Promise<void | any> => {
    try {
        const user = await userRepo.findUserByAttributes("email",req.body.email);
        if (!user) {
            return res.status(httpStatus.NOT_FOUND).json({
                status: httpStatus.NOT_FOUND,
                error: "Account does not exist. please register"
            })
        }
        const isValidPassword = await comparePassword(req.body.password, user.password)
        if (!isValidPassword) {
            return res.status(httpStatus.BAD_REQUEST).json({
                status: httpStatus.BAD_REQUEST,
                error: "invalid password"
            })
        }
        req.user = user
        return next();
    } catch (error: any) { 
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message
        })
    }
}

export {
    isUserExist,
    verifyUser
}