const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class DeliverModel extends Model {
    
}

DeliverModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    notNull: true
  },
 order_id:{
  type: DataTypes.INTEGER,
  allowNull: false
 },
 phone_number:{
  type: DataTypes.STRING,
  allowNull: false
 }
}, {
  sequelize,
  modelName: 'Deliver',
  tableName: 'deliver',
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

module.exports = DeliverModel;