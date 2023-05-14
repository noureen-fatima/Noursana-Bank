const mongoose = require("mongoose");
const BankSchema = new mongoose.Schema(
    {
        Name: String, 
        CNIC: String,
        Cards: [
            {type: mongoose.Schema.Types.ObjectId, ref: 'Card', default: null}
        ],
        Balance: Number,
        AccNo: Number,
    },
    {
        collection: "Bank-database",
    }
);

module.exports = BankSchema;