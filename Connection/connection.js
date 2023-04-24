const mongoose = require("mongoose");

async function connection(){
    try{
        await mongoose.connect("mongodb://localhost/taskapi");
        console.log("DB connected successfully");
    } catch(err) {
        console.log(err.message);
    }
}

module.exports = connection;