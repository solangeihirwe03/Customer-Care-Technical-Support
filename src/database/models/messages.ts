import { Model, DataTypes, Sequelize } from "sequelize";
import { IMessages } from "src/types";
import sequelizeConnection from "../config/db.config";

class Messages extends Model<IMessages>{
    declare id: string;
    declare username: string;
    declare email: string;
    declare message: string;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Messages.init(
    {
        id:{
            type: new DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        username:{
            type: new DataTypes.STRING(256),
            allowNull: false
        },
        email: {
            type: new DataTypes.STRING(256),
            allowNull: false
        },
        message: {
            type: new DataTypes.STRING(512),
            allowNull: false
        },
        createdAt:{
            type: new DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        },
        updatedAt:{
            type: new DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        }
    },
    {
        sequelize: sequelizeConnection,
        tableName: "messages",
        modelName: "Messages",
        timestamps: true
    }
)

export default Messages