const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
    {
        name: String, 
        CNIC: String,
        Card: String,
    },
    {
        collection: "UserInfo",
    }
);

mongoose.model("UserInfo", UserSchema);