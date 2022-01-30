// require("../models/user.js");
// var User= require('mongoose').model('User');    

const userController = require("../controllers/user.js");



const resolvers = {
    Query: {
        // User
        getUser: ()=>{
            console.log("Obteniendo usuario");
            return null;
        }
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