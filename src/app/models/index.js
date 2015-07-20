import fs from 'fs';
import Path from 'path';


let instances = [];

fs.readdirSync(__dirname).forEach(function(file) {
  if (file !== "index.js") {
    let model = require("./" + file);
    instances.push(model);
  }
});

export default instances;


// let register = function(server, options, next) {
//   fs.readdirSync(__dirname).forEach(function(file) {
//     if (file !== "index.js") {
//       let model = require("./" + file);
//     }
//   });
//   // for (var name in thinky.models) {
//   //   if (typeof thinky.models[name].defineRelations == "function") {
//   //     thinky.models[name].defineRelations();
//   //   }
//   // }
//   next();
// };

// register.attributes = {
//   name:     "ModelInitializer",
//   version:  "1.0.0"
// };

// export { register };