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
  return db.createTable('kompyuter', {
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
    protsessor:{
      type: 'string',
      notNull: true
    },
    ichki_xotira:{
      type: 'string',
      notNull: true
    },
    tashqi_xotira:{
      type: 'string',
      notNull: true
    },
    protsessor_soni:{
      type: 'string',
      notNull: true
    },
    ekran_razmer:{
      type: 'string',
      notNull: true
    },
    garantiya:{
      type: 'string',
      notNull: true
    },
    state:{
      type: 'string',
      notNull: true
    },
    date_time:{
      type: 'string'
    },
    sort:{
      type: 'string',
      notNull: true
    },
    size:{
      type:'int',
      notNull: true
    },
    filter_id:{
      type: 'int'
    }
  });
};

exports.down = function(db) {
  return db.dropTable('kompyuter');
};

exports._meta = {
  "version": 1
};
