const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class kompyuterModel extends Model {
    
}

kompyuterModel.init({
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
   protsessor:{
    type: DataTypes.STRING
   },
   ichki_xotira:{
    type: DataTypes.STRING
   },
   tashqi_xotira:{
    type: DataTypes.STRING
   },
   protsessor_soni:{
    type: DataTypes.STRING
   },
   ekran_razmer:{
    type: DataTypes.STRING
   },
   garantiya:{
    type: DataTypes.STRING
   },
   state:{
    type: DataTypes.STRING
   },
   date_time:{
    type: DataTypes.STRING
   },
   sort:{
    type: DataTypes.STRING()
   },
   size:{
    type: DataTypes.INTEGER()
   },
   filter_id:{
    type: DataTypes.INTEGER()
   },
}, {
  sequelize,
  modelName: 'Kompyuter',
  tableName: 'kompyuter',
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

module.exports = kompyuterModel;