// require("../models/user.js");
// var User= require('mongoose').model('User');    

const userController = require("../controllers/user.js");
const {GraphQLUpload} = require("graphql-upload"); 


const resolvers = {
    Upload: GraphQLUpload,
    Query: {
        // User
        getUser: (_, {id,username}) => userController.getUser(id, username),
    },

    Mutation: {
        //User
        register: (_, {input}) => userController.register(input),
        login: (_, {input}) => userController.login(input),    
            // console.log(newUser);
            // return null;
        updateAvatar: (_,{file},ctx) => userController.updateAvatar(file,ctx),
        
    }
};

module.exports = resolvers;