import Messages from "../../../database/models/messages";

const createMessage = async(body:any)=>{
    return await Messages.create(body)
}

const getAllContactMessages = async () => {
    return await Messages.findAll({
      order: [['createdAt', 'DESC']]
    });
};

const getContactMessageById = async (id: string) => {
    return await Messages.findByPk(id);
};

const deleteContactMessage = async (id: string) => {
    const message = await Messages.findByPk(id);
    if (!message) throw new Error('Message not found');
    return await message.destroy();
};

export default {
    createMessage,
    getAllContactMessages,
    getContactMessageById,
    deleteContactMessage
}