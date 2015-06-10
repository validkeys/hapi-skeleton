import { thinky } from '../initializers/database';

let type = thinky.type;

let User = thinky.createModel('users', {
  id:         type.string(),
  firstName:  type.string().min(1).required(),
  lastName:   type.string().min(1).required()
});

User.addListener('ready', function(model) {
  console.log("User table ready");
});

User.defineRelations = function() {
  // Define relationships here
};

export default User;