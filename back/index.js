const { ApolloServer, PubSub } = require("apollo-server");
const connectDB = require("./config");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const pubsub = new PubSub();

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub })
});

server.listen({ port: 5000 }).then((res) => {
  console.log(`server runing at ${res.url}`);
});
