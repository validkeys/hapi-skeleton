export default {

  index: (req, reply) => {
    var Hubs = req.model.hubs;
    Hubs.find()
      .then((res) => {
        reply({ hubs: res })
      })
  }

};