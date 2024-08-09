
// import user model
const { User } = require('../server/models');
// import sign token function from auth
// const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      user: async () => {
        return await User.find({});
      }
    },

  };
  
  module.exports = resolvers;

  //log in user, saving book, deleting book, need mutation here 