const typeDefs = `
  type User {
    _id: ID
    name: String
   //username email add here 
  }

  type Query {
    users: [User]
  }
`;

module.exports = typeDefs;