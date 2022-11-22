const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
const ClassesModel = require('./classes.model');
const PupilModel = require('./pupil.model');
const UserModel = require('./user.model');
const moment = require('moment');
class PaymentTransactionsModel extends Model {}

PaymentTransactionsModel.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pupil_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    classes_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      get(){
        return moment(this.getDataValue('start_date')).format('YYYY-MM-DD');
      }
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
      get(){
        return moment(this.getDataValue('end_date')).format('YYYY-MM-DD');
      }
    },
    price: {
      type: DataTypes.DECIMAL(17,3),
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(17,3),
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    payment_type: {
      type: DataTypes.ENUM('terminal','cash','found'),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payment_transactions',
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
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "pupil_id",
        using: "BTREE",
        fields: [
          { name: "pupil_id" },
        ]
      },
      {
        name: "classes_id",
        using: "BTREE",
        fields: [
          { name: "classes_id" },
        ]
      },
    ]
  }
);

PaymentTransactionsModel.belongsTo(UserModel, {as:'user', foreignKey:'user_id'});
PaymentTransactionsModel.belongsTo(PupilModel, {as:'pupil', foreignKey:'pupil_id'});
PaymentTransactionsModel.belongsTo(ClassesModel, {as:'classes', foreignKey:'classes_id'});

module.exports = PaymentTransactionsModel;