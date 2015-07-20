let models = require('../models');

export default {
  adapters:     {
    'postgres-adapter': require('sails-postgresql')
  },
  connections:  {
    presslyDb: {
      adapter:  'postgres-adapter',
      user:     'postgres',
      password: '',
      host:     'localhost',
      port:     '5432',
      database: 'presslydb',
      migrate:  'safe'
    }
  },
  models: models
};