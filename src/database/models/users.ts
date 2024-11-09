import { Model, DataTypes, Optional } from "sequelize";
import sequelizeConnection from "../config/db.config";
import { hashPassword } from "../../helpers/index";
import Articles from "./articles";

export interface usersAttributes{
    id: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UsersCreationAttributes extends Optional<usersAttributes, "id"> {}
class Users extends Model<usersAttributes, UsersCreationAttributes> implements usersAttributes {
    declare id: string;
    declare username?: string | undefined;
    declare email: string;
    declare password: string;
    declare createdAt?: Date | undefined;
    declare updatedAt?: Date | undefined;

    static associate() {
        Users.hasMany(Articles, {foreignKey: "userId", as: "articles"})
    }
}

Users.init(
    {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        username:{
            type: DataTypes.STRING(128),
            allowNull: true
        },
        email:{
            type: DataTypes.STRING(128),
            allowNull: false,
            unique: true
        },
        password:{
            type: DataTypes.STRING(128),
            allowNull: false
        },
        createdAt:{
            type: DataTypes.DATE,
            field: "createdAt",
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        updatedAt:{
            type: DataTypes.DATE,
            field: "createdAt",
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
    },
    {
        sequelize: sequelizeConnection,
        tableName: "users",
        timestamps: true,
        modelName: "Users",
        hooks:{
            beforeCreate: async (user)=>{
                if(user.password) {
                    user.password = await hashPassword(user.password)
                }
            }
        }
    }
);

export default Users