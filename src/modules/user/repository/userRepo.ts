import Users from "../../../database/models/users";

const createUser = async(body: any)=>{
    return await Users.create(body)
};

const findUserByAttributes = async(key: string, value: any)=>{
    return await Users.findOne({where: {[key]: value}})
}

export default {
    createUser,
    findUserByAttributes
}