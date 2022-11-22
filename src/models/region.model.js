const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class regionModel extends Model {
    
}

regionModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    notNull: true
  },
 name:{
  type: DataTypes.STRING,
  allowNull: false
 }
}, {
  sequelize,
  modelName: 'region',
  tableName: 'region',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id" },
      ]
    },
  ],
  //findOne da yoki findAll da chaqirish kerak
  scopes: {
    withoutPassword: {
      attributes: { exclude: ['password_hash'] },
    }
  }
});

module.exports = regionModel;