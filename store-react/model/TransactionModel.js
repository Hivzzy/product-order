const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema(
    {
        customer_id:
        {
            type: Number,
            required: true,
        },
        product: [
            {
                product_id:
                {
                    type: Number,
                    required: true,
                },
                product_price:
                {
                    type: Number,
                    required: true,
                },
                quantity:
                {
                    type: Number,
                    required: true,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;