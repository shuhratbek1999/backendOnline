const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class konditsionerModel extends Model {
    
}

konditsionerModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    notNull: true
  },
  title:{
    type: DataTypes.STRING,
    allowNull: false
   },
   price:{
    type: DataTypes.DECIMAL,
    allowNull: false
   },
   desc:{
    type: DataTypes.STRING
   }
}, {
  sequelize,
  modelName: 'Konditsioner',
  tableName: 'konditsioner',
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

module.exports = konditsionerModel;