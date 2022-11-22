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
  return db.createTable('mebel', {
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
    },
    length:{
      type: 'string',
      notNull: true
    },
    kengligi:{
      type: 'string'
    },
    height:{
      type: 'string',
      notNull: true
    },
    img:{
      type: 'string'
    },
    sort:{
      type: 'string'
    },
    size:{
      type :'int'
    },
    filter_id:{
      type: 'int'
    },
    date_time:{
      type: 'string'
    }
  });
};

exports.down = function(db) {
  return db.dropTable('mebel');
};

exports._meta = {
  "version": 1
};
