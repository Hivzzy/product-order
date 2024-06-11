const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLFloat,
  GraphQLID,
} = require("graphql");

const TransactionProduct = new GraphQLObjectType({
  name: "TransactionProduct",
  fields: () => ({
    product_id: { type: GraphQLInt },
    product_price: { type: GraphQLFloat },
    quantity: { type: GraphQLInt },
  }),
});

const TransactionType = new GraphQLObjectType({
  name: "Transaction",
  fields: () => ({
    id: { type: GraphQLID },
    customer_id: { type: GraphQLInt },
    product: {
      type: new GraphQLList(TransactionProduct),
    },
  }),
});

module.exports = TransactionType;