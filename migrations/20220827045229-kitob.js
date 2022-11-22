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
  return db.createTable('kitob', {
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
    author:{
      type: 'string',
      notNull: true
    },
    language:{
      type: 'string',
      notNull: true
    },
    translator:{
      type: 'string',
      notNull: true
    },
    nambur_pages:{
      type: 'decimal',
      notNull: true
    },
    paper_size:{
      type: 'string',
      notNull: true
    },
    publication_year:{
      type: 'string',
      notNull: true
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
  return db.dropTable('kitob');
};

exports._meta = {
  "version": 1
};
