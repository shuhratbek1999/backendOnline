'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable("register_product", {
    id: {
      type:'int',
      primaryKey: true,
      autoIncrement: true,
      notNull: true
    },
    product_id:{
      type: 'int'
    },
    datetime:{
      type: 'int'
    },
    price:{
      type: 'decimal'
    },
    name:{
      type: 'string'
    },
    yetkizib_berish:{
      type: 'boolean'
    }
  });
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
