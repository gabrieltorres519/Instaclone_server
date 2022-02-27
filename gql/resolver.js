// require("../models/user.js");
// var User= require('mongoose').model('User');    

const userController = require("../controllers/user.js");
const {GraphQLUpload} = require("graphql-upload"); 
const followController = require("../controllers/follow");


const resolvers = {
    Upload: GraphQLUpload,
    Query: {
        // User
        getUser: (_, {id,username}) => userController.getUser(id, username),
        search: (_, {search}) => userController.search(search),

        //Follow
        isFollow: (_,{username},ctx) => followController.isFollow(username, ctx), 
    },

    Mutation: {
        //User
        register: (_, {input}) => userController.register(input),
        login: (_, {input}) => userController.login(input),    
            // console.log(newUser);
            // return null;
        updateAvatar: (_,{file},ctx) => userController.updateAvatar(file,ctx),
        deleteAvatar: (_,{}, ctx) => userController.deleteAvatar(ctx),
        updateUser: (_, { input }, ctx) => userController.updateUser(input, ctx),


        //Follow
        follow: (_,{username}, ctx) => followController.follow(username,ctx), 
        unFollow: (_,{username},ctx) => followController.unFollow(username, ctx), 
        
        
    }
};

module.exports = resolvers;