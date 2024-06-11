const {
  GraphQLInt,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLFloat,
} = require("graphql");
const TransactionType = require("./TransactionTypeDef");
const Transaction = require("../../model/TransactionModel");

const TransactionProductInputType = new GraphQLInputObjectType({
  name: "TransactionProductInput",
  fields: () => ({
    product_id: { type: GraphQLInt },
    product_price: { type: GraphQLFloat },
    quantity: { type: GraphQLInt },
  }),
});

const addTransaction = {
  type: TransactionType,
  args: {
    customer_id: { type: GraphQLInt },
    product: { type: new GraphQLList(TransactionProductInputType) },
  },
  resolve: async (parent, args, context, info) => {
    const transaction = await Transaction.create(args);
    return transaction;
  },
};

module.exports = {
  addTransaction,
};