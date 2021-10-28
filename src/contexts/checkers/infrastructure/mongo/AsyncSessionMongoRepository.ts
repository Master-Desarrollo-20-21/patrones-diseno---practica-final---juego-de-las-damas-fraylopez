import { MongoClient } from "mongodb";
import { IAsyncSessionRepository } from "../../domain/ISessionRepository";
import { Session } from "../../domain/Session";
import { MongoMemoryServer } from 'mongodb-memory-server';

export class AsyncSessionMongoRepository implements IAsyncSessionRepository {
  private readonly collectionName: string = "session";
  private mockServer: MongoMemoryServer;
  private mongoClient!: MongoClient;
  constructor(private session: Session) {
    this.mockServer = new MongoMemoryServer();
  }

  async connect() {
    this.mongoClient = await MongoClient.connect(this.mockServer.getUri("checkers"));
  }

  async save(name?: string): Promise<void> {
    const data = {
      name,
      ...this.primitives,
    };
    await this.collection.insertOne(this.primitives);
  }
  async load(name: string): Promise<void> {
    const storedData = await this.collection.findOne({ name });
    this.session = Object.assign(this.session, storedData);
  }

  async isValidGameName(name: string): Promise<boolean> {
    const names = await this.getSavedGamesNames();
    return !names.some(filename => filename === name);
  }
  async getSavedGamesNames(): Promise<string[]> {
    const stored = await this.collection.find({})
      .toArray();
    return stored.map(d => d.name);
  }

  private get collection() {
    return this.mongoClient.db().collection(this.collectionName);
  }

  private get primitives() {
    return Object.assign({}, this.session);
  }

}