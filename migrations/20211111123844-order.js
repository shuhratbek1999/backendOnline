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
  return db.createTable('order',{
    id: {
      type:'int',
      primaryKey: true,
      autoIncrement: true,
      notNull: true
    },
    User_id: {
      type: 'string',
      length: 20,
      notNull: true,
    },
    amount:{
      type: 'string'
    },
    status: {
      type: 'string'
    },
    adress: {
      type: 'string'
    }

  })
};

exports.down = function(db) {
  return db.dropTable('order');
};

exports._meta = {
  "version": 1
}; 