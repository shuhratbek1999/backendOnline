const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class UserModel extends Model {
    toJSON () {//Api da ishladi
    var values = Object.assign({}, this.get());
        delete values.password_hash;
        return values;
    }
}

UserModel.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  full_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  phone_number: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: "phone_number"
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  token: {
    type: DataTypes.VIRTUAL
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'user',
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
    {
      name: "phone_number",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "phone_number" },
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

module.exports = UserModel;