export default [
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
];