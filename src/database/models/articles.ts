import { DataTypes, Model, Sequelize } from "sequelize";
import Users from "./users";
import { IArticles } from "../../types";
import sequelizeConnection from "../config/db.config";
import Comments from "./comments";


class Articles extends Model<IArticles> {
    declare id: string;
    declare userId: string;
    declare title: string;
    declare description: string;
    declare imageUrl: string;
    declare createdAt: Date;
    declare updatedAt: Date;

    static associate() {
        Articles.belongsTo(Users, {foreignKey: "userId", as: "users"});
        Articles.hasMany(Comments,{foreignKey: "articleId", as: "comments"})
    }
}

Articles.init(
    {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        userId:{
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "users",
                key: "id"
            },
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        },
        title:{
            type:DataTypes.STRING(128),
            allowNull: false,
        },
        description:{
            type: DataTypes.UUID,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING(290),
            allowNull:true
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        },
        updatedAt:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        }
    },
    {
        sequelize: sequelizeConnection,
        tableName: "articles",
        modelName: "Articles",
        timestamps: true
    }
)

export default Articles