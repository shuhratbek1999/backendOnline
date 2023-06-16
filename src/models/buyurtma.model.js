const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
const ProductModel = require('./product.model');
const regionModel = require('./region.model');
const districtModel = require('./district.model');
class buyurtmaModel extends Model {
    
}

buyurtmaModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    notNull: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    notNull: true,
  },
  phone_number: {
    type: DataTypes.STRING,
    notNull: true,
  },
  full_name:{
    type: DataTypes.STRING,
    allowNull: false
  },
  region_id:{
    type: DataTypes.INTEGER,
    notNull: true
  },
  district_id:{
    type: DataTypes.INTEGER,
    notNull: true
  },
  adress:{
    type: DataTypes.STRING
  },
  date_time: {
    type: DataTypes.INTEGER,
  },
  pay_type: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'buyurtma',
  tableName: 'buyurtma',
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
buyurtmaModel.belongsTo(ProductModel, {as: 'product', foreignKey: 'product_id'})
buyurtmaModel.belongsTo(regionModel, {as: 'region', foreignKey: 'region_id'})
buyurtmaModel.belongsTo(districtModel, {as: 'district', foreignKey: 'district_id'})
module.exports = buyurtmaModel;