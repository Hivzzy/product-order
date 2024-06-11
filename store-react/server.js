const express = require("express");
const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
require("./dbconnect");

const app = express();
const PORT = 3000;

app.use(cors());

const transactionQuery = require("./graphql/transaction/TransactionQuery");
const transactionMutation = require("./graphql/transaction/TransactionMutation");

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...transactionQuery,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...transactionMutation,
  },
});

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: new GraphQLSchema({
      query: Query,
      mutation: Mutation,
    }),
  })
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});