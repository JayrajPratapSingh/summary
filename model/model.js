const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
task:{
    type:String
},

is_completed:{
    type:Boolean
}
});

module.exports = new mongoose.model("USER", UserSchema);