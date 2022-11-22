const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class mebelModel extends Model {
    
}

mebelModel.init({
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
    type: DataTypes.STRING,
    allowNull: false
   },
   length:{
    type: DataTypes.STRING,
    allowNull: false
   },
   kengligi:{
    type: DataTypes.STRING(),
    allowNull: false
   },
   height:{
    type: DataTypes.STRING(),
    allowNull: false
   },
   img:{
    type: DataTypes.STRING()
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
   date_time:{
    type : DataTypes.STRING()
   }
}, {
  sequelize,
  modelName: 'Mebel',
  tableName: 'mebel',
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

module.exports = mebelModel;