const mongoose = require("mongoose");
const CardSchema = new mongoose.Schema(
    {
        CardNo: Number,
        Type: String,
        PIN: String,
        ExpDate: Date,
        IssueDate: Date,
    },
    {
        collection: "Bank-database",
    }
);

module.exports = CardSchema;