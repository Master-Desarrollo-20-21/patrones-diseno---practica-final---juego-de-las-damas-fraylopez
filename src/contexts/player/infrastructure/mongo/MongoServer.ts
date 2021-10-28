import { MongoMemoryServer } from "mongodb-memory-server";

export class MongoServer {
  private static _instance: MongoServer;
  private server: MongoMemoryServer;
  private url!: string;
  constructor() {
    this.server = new MongoMemoryServer();
  }

  static getInstance() {
    if (!this._instance) {
      this._instance = new MongoServer();
    }
    return this._instance;
  }
  async connect() {
    await this.server.start();
    this.url = this.server.getUri("checkers");
  }
  getURL() {
    return this.url;
  }
}