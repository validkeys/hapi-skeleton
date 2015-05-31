import good from './good';
import mrhorse from './mrhorse';

export default {
  connections: [
    {
      host:   'localhost',
      port:   3000,
      labels: ['api'],
      routes: {
        cors: {
          origin: ['*']
        },
        plugins: {
          // Global Policies (MrHorse)
          policies: []
        }
      }
    }
  ],
  plugins: {
    "good":                     good,
    "mrhorse":                  mrhorse,
    // "hapi-auth-jwt":            null,
    // "./initializers/database":  null,
    // "./models/user":            null,
    "./pods/root":              null
  }
}