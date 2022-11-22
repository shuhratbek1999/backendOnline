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
  return db.createTable('payment_transactions',{
    id: {
      type:'int',
      primaryKey: true,
      autoIncrement: true,
      notNull: true
    },
    user_id: {
      type:'int',
      notNull: true
    },
    pupil_id: {
      type:'int',
      notNull: true
    },
    classes_id: {
      type:'int',
      notNull: true
    },
    start_date:{
      type: 'datetime',
      notNull: true
    },
    end_date:{
      type: 'datetime',
      notNull: true
    },
    price: {
      type: 'decimal(17,3)',
      notNull: true
    },
    amount: {
      type: 'decimal(17,3)',
      notNull: true
    },
    comment: {
      type: 'string',
      length: 100,
      notNull: true,
    },
    payment_type: {
      type: 'enum',
      length:"'terminal','cash','found'"
    },
  })
.then(function(result){
    db.addIndex('payment_transactions',
      'user_id',
      ['user_id'],
     )
})
.then(function(result){
  db.addIndex('payment_transactions',
    'pupil_id',
    ['pupil_id']
  )
})
.then(function(result){
  db.addIndex('payment_transactions',
    'classes_id',
    ['classes_id']
  )
})
};

exports.down = function(db) {
  return db.dropTable('payment_transactions');
};

exports._meta = {
  "version": 1
}; 