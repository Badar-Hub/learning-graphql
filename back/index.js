const { ApolloServer } = require("apollo-server");
const connectDB = require("./config");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req })
});

server.listen({ port: 5000 }).then((res) => {
  console.log(`server runing at ${res.url}`);
});
