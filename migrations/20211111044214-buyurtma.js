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
  return db.createTable('buyurtma', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      notNull: true
    },
    product_id: {
      type: 'int',
    },
    phone_number: {
      type: 'string',
      notNull: true,
    },
    full_name: {
      type: 'string',
      notNull: true
    },
    region_id: {
      type: 'int',
    },
    district_id: {
      type: 'int'
    },
    adress: {
      type: 'string',
      length: 100
    },
    date_time: {
      type: 'int'
    },
    pay_type: {
    type: 'int',
    notNull: true
    }
  });
};

exports.down = function(db) {
  return db.dropTable('buyurtma');
};

exports._meta = {
  "version": 1
};
