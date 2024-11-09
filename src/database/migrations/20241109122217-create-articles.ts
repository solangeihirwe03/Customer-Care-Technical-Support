import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async( queryInterface: QueryInterface)=>{
    await queryInterface.createTable("articles", {
      id:{
        type: new DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      title: {
        type: new DataTypes.STRING(128),
        allowNull: false
      },
      description:{
        type: new DataTypes.STRING(256),
        allowNull: true
      },
      imageUrl:{
        type: new DataTypes.STRING(290),
        allowNull: true
      },
      createdAt: {
        type: new DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        type: new DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    },
  )
  },
  down: async(queryInterface: QueryInterface)=>{
    await queryInterface.dropTable("articles")
  }
}