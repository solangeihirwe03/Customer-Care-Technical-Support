import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async(queryInterface: QueryInterface)=>{
    await queryInterface.createTable("messages", {
      id:{
        type: new DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      username: {
        type: new DataTypes.STRING(256),
        allowNull: false
      },
      email:{
        type: new DataTypes.STRING(256),
        allowNull: false
      },
      message:{
        type: new DataTypes.STRING(512),
        allowNull: true
      },
      createdAt:{
        type: new DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true
      },
      updatedAt:{
        type: new DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true
      }
    })
  },
  down: async(queryInterface: QueryInterface)=>{
    await queryInterface.dropTable("messages")
  }
}