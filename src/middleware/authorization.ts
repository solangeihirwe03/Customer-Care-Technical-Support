import { Response, NextFunction } from "express";
import { decodeToken } from "../helpers/index";
import httpStatus from "http-status";

const userAuthorization = (req: any, res:Response, next:NextFunction): void | any=>{
    try{
        const token: any = req.headers["authorization"]?.split(" ")[1];
        if(!token){
            return res.status(httpStatus.UNAUTHORIZED).json({
                status: httpStatus.UNAUTHORIZED,
                message: "Not authorized, please login"
            })
        }
        const decode= decodeToken(token);
        req.user = decode
        return next()
    }catch(error: any){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message
        })
    }
}

export {
    userAuthorization
}