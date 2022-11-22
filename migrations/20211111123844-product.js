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
  return db.createTable('product',{
    id: {
      type:'int',
      primaryKey: true,
      autoIncrement: true,
      notNull: true
    },
    title: {
      type: 'string',
      length: 20,
      notNull: true,
    },
    desc: {
      type: 'string',
      length: 200,
      notNull: true,
    },
    img:{
      type: 'string'
    },
    categories:{
      type: 'string',
      notNull: true
    },
    size:{
      type: 'string',
      notNull: true
    },
    price: {
      type: 'decimal',
      notNull: true
    },
    color: {
      type: 'string',
      notNull: true
    }
  })
};

exports.down = function(db) {
  return db.dropTable('product');
};

exports._meta = {
  "version": 1
}; 