import dotenv from "dotenv"
import bcrypt from "bcrypt"

dotenv.config();

const hashPassword = (password: string)=>{
    return bcrypt.hashSync(password, 10)
}

export{
    hashPassword
}