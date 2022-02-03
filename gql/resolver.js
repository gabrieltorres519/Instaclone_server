// require("../models/user.js");
// var User= require('mongoose').model('User');    

const userController = require("../controllers/user.js");



const resolvers = {
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
        
    }
};

module.exports = resolvers;