import sequelize from "../config/db.config.js";
import { DataTypes } from "sequelize";

const Token = sequelize.define('Token', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('verification', 'reset-password'),
        allowNull: false
    },
    expiry: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

export default Token
