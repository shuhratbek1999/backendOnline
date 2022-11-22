const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class kitobModel extends Model {
    
}

kitobModel.init({
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
   },
   author:{
    type: DataTypes.STRING
   },
   language:{
    type: DataTypes.STRING
   },
   translator:{
    type: DataTypes.STRING
   },
   nambur_pages:{
    type: DataTypes.STRING
   },
   paper_size:{
    type: DataTypes.STRING
   },
   publication_year:{
    type: DataTypes.STRING
   },
   sort:{
    type: DataTypes.STRING
   },
   size:{
    type: DataTypes.INTEGER
   },
   filter_id:{
    type: DataTypes.INTEGER
   },
}, {
  sequelize,
  modelName: 'Kitob',
  tableName: 'kitob',
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

module.exports = kitobModel;