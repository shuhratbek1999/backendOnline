const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class districtModel extends Model {
    
}

districtModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    notNull: true
  },
 name:{
  type: DataTypes.STRING,
  allowNull: false
 },
 region_id:{
  type: DataTypes.INTEGER,
  allowNull: false
 }
}, {
  sequelize,
  modelName: 'District',
  tableName: 'district',
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

module.exports = districtModel;