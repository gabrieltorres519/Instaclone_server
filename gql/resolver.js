const User = require("../models/user");


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
        register: (_, {input}) => {
            const newUser = input;
            newUser.email = newUser.email.toLowerCase();
            newUser.username = newUser.username.toLowerCase();
            

            console.log(newUser);
            return null;
        }
    }
};

module.exports = resolvers;