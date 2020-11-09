const JokeController = require("../controllers/jokes.controller.js"); 

module.exports = app => {
  app.get("/api/jokes/", JokeController.findAllJokes);
  app.get("/api/jokes/random", JokeController.randomJoke);
  app.get("/api/jokes/:id", JokeController.findAJoke);
  app.put("/api/jokes/update/:id", JokeController.modJoke);
  app.post("/api/jokes/new", JokeController.createJoke);
  app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
}; 