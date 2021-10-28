import { Checkers } from "./Checkers";
import { MongoServer } from "./contexts/player/infrastructure/mongo/MongoServer";

console.log("initializing...");

MongoServer.getInstance().connect().then(() => {
  new Checkers().play();
});