import { Router } from "express";
import messageController from "../modules/messages/controller/messageController";

const router = Router();

router.post("/send-message", messageController.addMessage)
router.get('/get-messages', messageController.getAllMessages);
router.get('/get-message/:id', messageController.getMessageById);
router.delete('delete-message/:id', messageController.deleteMessage);

export default router