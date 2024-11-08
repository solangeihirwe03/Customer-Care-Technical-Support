import { Request, Response, NextFunction } from "express"
import userRepo from "../modules/user/repository/userRepo";
import httpStatus from "http-status"


const isUserExist = async (req: Request, res: Response, next: NextFunction):Promise<void | any>=> {
    try {
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

export {
    isUserExist
}