const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
    setup : {
        type : String,
        required : [true,"there must be a setup"],
        minlength : [10, "setup must be 10 characters because jokes are long and unfunny"]
    },
    punchline : {
        type : String,
        required : [true,"there must be a punchline"],
        minlength : [3, "Even fart jokes are 3 characters"]
    },
})

const Joke = mongoose.model("Joke", JokesSchema)

module.exports = Joke;