const Jokes = require("../models/jokes.model");
const Joke = require("../models/jokes.model");

// get all Jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => res.json({ jokes: allJokes }))
        .catch((err) =>
            res.json({ message: "there was a all jokes error", error: err })
        );
};

// get a single Joke
module.exports.findAJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then((aJoke) => res.json({ joke: aJoke }))
        .catch((err) =>
            res.json({ message: "single joking error", error: err })
        );
};

// create a Joke
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then((newJoke) => res.json({ joke: newJoke }))
        .then(console.log(req.body))
        .catch((err) => res.json({ message: "create joke error", error: err }));
};

// update a Joke
module.exports.modJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((newJoke) => res.json({ joke: newJoke }))
        .catch((err) => res.json({ message: "modify error", error: err }));
};

// delete a Joke
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then((newJoke) => res.json({ result: newJoke }))
        .catch((err) => res.json({ message: "delete error", error: err }));
};
