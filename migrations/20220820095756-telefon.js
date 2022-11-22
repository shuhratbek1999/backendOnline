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
  return db.createTable('telefon', {
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
    android_version: {
      type: 'string',
      notNull: true
    },
    simkarta: {
      type: 'string',
      notNull: true
    },
    ogirligi: {
      type: 'string',
      notNull: true
    },
    razmer: {
      type: 'string',
      notNull: true
    },
    kamera: {
      type: 'string',
      notNull: true
    },
    internet_aloqa: {
      type: 'string',
      notNull: true
    },
    protsessor: {
      type: 'string',
      notNull: true
    },
    ichki_xotira: {
      type: 'string',
      notNull: true
    },
    tashqi_xotira: {
      type: 'string',
      notNull: true
    },
    batareka: {
      type: 'string',
      notNull: true
    },
    garantiya: {
      type: 'string',
      notNull: true
    },
    date_time: {
      type: 'string',
      notNull: true
    },
    size: {
      type: 'string',
      notNull: true
    },
    sort: {
      type: 'string',
      notNull: true
    },
    filter_id: {
      type: 'int',
      notNull: true
    },
  });
};

exports.down = function(db) {
  return db.dropTable('telefon');
};

exports._meta = {
  "version": 1
};
