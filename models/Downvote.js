const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Downvote extends Model { }

Downvote.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        },
        
        downvote: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'downvote'
    }
);

module.exports = Downvote;