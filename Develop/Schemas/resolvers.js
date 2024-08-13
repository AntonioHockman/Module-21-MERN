
// import user model
const userController = require('../server/controllers/user-controller');
const { User } = require('../server/models/User');
//importing bookschema from models
const {Book} = require ('../server/models/Book')
const { AuthenticationError } = require('../server/utils/auth');
// import sign token function from auth
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      user: async () => {
        return await User.find();
      },
      user: async (parent,{userId}) => {return User.findOne({_id:userId});
    },
    me: async ( parent, args, context) => {
      if (context.user) {
        return User.findOne ({ _id: context.user._id});
      }
      throw AuthenticationError;
    },
    },
  
  
  Mutation :{ 
    addUser: async (parent,{ name,email,password}) =>  {
      const profile = await User.create({ name, email, password });
      const token = signToken(User);
      return { token, profile };
    },
    login: async (parent, {email,password}) => {
      const user = await User.findOne({ email });

      if (!userController) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
  
  //adding book mutation
  addBook : async (parent, {bookId, book}, context) => { 
    if (context.book) {
      return Book.findOneAndUpdate(
        {_id: profileId},
        { $addToBook : {books:book},
      },
      {
        new:true,
        runValidators: true,
      }
      );
    }
    //if not logged in, throw an error
    throw AuthenticationError;
  },
    removeBook: async (parent, {book},
    context) => {
      if (context.book) {
        return Book.findOneAndUpdate(
          {_id: context.book.bookId},
          {$pull : { books:book} },
          {new:true} 
        );
      }
      throw AuthenticationError;
    },
  },
};
  module.exports = resolvers;

  //log in user, saving book, deleting book, need mutation here 