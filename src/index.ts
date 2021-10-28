import { Checkers } from "./Checkers";
import { MongoServer } from "./contexts/checkers/infrastructure/mongo/MongoServer";

console.log("initializing...");

MongoServer.getInstance().connect().then(() => {
  new Checkers().play();
});