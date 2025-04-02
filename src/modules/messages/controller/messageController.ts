import messageRepo from "../repository/messageRepo";
import { Request, Response } from "express";
import httpStatus from "http-status";

const addMessage = async (req: Request, res: Response): Promise<any> => {
    try {
        const message = await messageRepo.createMessage({
            username: req.body.username,
            email: req.body.email,
            message: req.body.message
        })

        return res.status(httpStatus.CREATED).json({
            status: httpStatus.CREATED,
            data: { message }
        })
    } catch (error: any) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message
        })
    }
}

const getAllMessages = async (req: Request, res: Response) => {
    try {
        const messages = await messageRepo.getAllContactMessages();

        res.status(httpStatus.OK).json({
            status: httpStatus.OK,
            data: { messages }
        });

    } catch (error: any) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message
        });
    }
};

const getMessageById = async (req: Request, res: Response):Promise<any> => {
    try {
      const message = await messageRepo.getContactMessageById(req.params.id);
      
      if (!message) {
        return res.status(httpStatus.NOT_FOUND).json({
          status: httpStatus.NOT_FOUND,
          error: "Message not found"
        });
      }
      
      res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        data: { message }
      });
      
    } catch (error: any) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        error: error.message
      });
    }
};

const deleteMessage = async (req: Request, res: Response):Promise<any> => {
    try {
      const result = await messageRepo.deleteContactMessage(req.params.id);
      
      res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        data: { deleted: true }
      });
      
    } catch (error: any) {
      if (error.message === 'Message not found') {
        return res.status(httpStatus.NOT_FOUND).json({
          status: httpStatus.NOT_FOUND,
          error: error.message
        });
      }
      
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        error: error.message
      });
    }
};
export default {
    addMessage,
    getAllMessages,
    getMessageById,
    deleteMessage
}