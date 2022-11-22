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
  return db.createTable('konditsioner', {
    id: {
      type:'int',
      primaryKey: true,
      autoIncrement: true,
      notNull: true
    },
    title:{
      type: 'string',
      notNull: true
    },
    price:{
      type: 'decimal',
      notNull: true
    },
    desc:{
      type: 'string'
    }
  });
};

exports.down = function(db) {
  return db.dropTable('konditsioner');
};

exports._meta = {
  "version": 1
};
