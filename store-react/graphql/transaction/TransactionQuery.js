const { GraphQLList } = require("graphql");
const TransactionType = require("./TransactionTypeDef");
const Transaction = require("../../model/TransactionModel");

const getTransactions = {
  type: new GraphQLList(TransactionType),
  resolve: async (parent, args, contect, info) => {
    const transaction = await Transaction.find().sort({ createdAt: -1 });

    return transaction;
  },
};

module.exports = {
  getTransactions,
};