const  mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const {graphqlUploadExpress} = require("graphql-upload");
const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolver");
require("dotenv").config({ path: ".env"});


mongoose.connect(process.env.BBDD,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, _)=> {
    if(err){
        console.log("Error de conexion");
        console.log(err);
    }else{
       //console.log(process.env.BBDD);
       server();
    }
});

async function server() {
    const serverApollo = new ApolloServer({
        typeDefs,
        resolvers,
    }); 
    await serverApollo.start();
    const app = express();
    app.use(graphqlUploadExpress());
    serverApollo.applyMiddleware({app});
    await new Promise((r) => app.listen({port: process.env.PORT || 4000},r));

    // serverApollo.listen().then(({url})=>{
         console.log("###################################");
         console.log(`Servidor listo en la url http://localhost:4000${serverApollo.graphqlPath}`);
         console.log("###################################");
    // });
}

