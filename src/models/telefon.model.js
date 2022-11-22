const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class telefonModel extends Model {
    
}

telefonModel.init({
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
   android_version:{
    type: DataTypes.STRING()
   },
   simkarta:{
    type: DataTypes.STRING()
   },
   ogirligi:{
    type: DataTypes.STRING()
   },
   razmer:{
    type: DataTypes.STRING()
   },
   kamera:{
    type: DataTypes.STRING()
   },
   internet_aloqa:{
    type: DataTypes.STRING()
   },
   protsessor:{
    type: DataTypes.STRING()
   },
   ichki_xotira:{
    type: DataTypes.STRING()
   },
   tashqi_xotira:{
    type: DataTypes.STRING()
   },
   batareka:{
    type: DataTypes.STRING()
   },
   garantiya:{
    type: DataTypes.STRING()
   },
   date_time:{
    type: DataTypes.STRING()
   },
   size:{
    type: DataTypes.STRING()
   },
   sort:{
    type: DataTypes.STRING()
   },
   filter_id:{
    type: DataTypes.INTEGER()
   },
}, {
  sequelize,
  modelName: 'Telefon',
  tableName: 'telefon',
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

module.exports = telefonModel;