import connections from './connections';
import good from './good';
import mrhorse from './mrhorse';
import waterlineConfig from './waterline';

export default {
  connections: connections,
  plugins: {
    "good":                     good,
    "mrhorse":                  mrhorse,
    "dogwater":                 waterlineConfig,
    // "hapi-auth-jwt":         null,
    "./pods/root":              null
  }
}