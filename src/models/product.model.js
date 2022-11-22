const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class ProductModel extends Model {
    
}

ProductModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    notNull: true
  },
  title: {
    type: DataTypes.STRING,
    notNull: true,
  },
  desc: {
    type: DataTypes.STRING,
    length: 200,
    notNull: true,
  },
  img:{
    type: DataTypes.STRING
  },
  categories:{
    type: DataTypes.STRING,
    notNull: true
  },
  size:{
    type: DataTypes.STRING,
    notNull: true
  },
  price: {
    type: DataTypes.DECIMAL,
    notNull: true
  },
  color: {
    type: DataTypes.STRING,
    notNull: true
  }
}, {
  sequelize,
  modelName: 'Product',
  tableName: 'product',
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

module.exports = ProductModel;