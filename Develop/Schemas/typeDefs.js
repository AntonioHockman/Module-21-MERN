const typeDefs = `
  type Query{
    me: User
  }

  input SavedBookInput{
  author:[String!]
  description: String!
  title: String!
  image: String!
  link: String!

  }
  type Mutation {
  login(email!, password!):Auth
    addUser(username: String!, email: String!): Auth
    addSavedBook(input SavedBookInput!): User
    removeBook(bookId!):User
  }
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
    type Book{
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
    }

    type Auth{
    token:String
    user: User
    }

`;

module.exports = typeDefs;