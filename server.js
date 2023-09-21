const express = require('express');
const { ApolloServer } = require("apollo-server-express");
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { readdirSync } = require('fs');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./database');
const restRoutes = require('./rest/index');
const path = require('path');

//express server
const app = express();

//db-connection
connectDB();

//middlewares
app.use(cors());
app.use(express.json({limit: '5mb'}));

// read routes express
readdirSync('./rest').map((r) => app.use('/api', require(`./rest/${r}`)));


//typeDefs
const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, './typeDefs')));

//Resolvers

//apollo server sign 
const apolloServer = new ApolloServer({
    typeDefs,
});

// vinculacion apollo-server with express
apolloServer.applyMiddleware({app});

// server listen
app.listen(process.env.PORT, ()=>{
    console.log(`Server listening on port ${process.env.PORT}`);
});