import { IMoveAlgorithm } from "../domain/IMoveAlgorithm";
import { ISessionRepository } from "../domain/ISessionRepository";
import { RandomMoveWithDummyHeuristicAlgorithm } from "../domain/RandomMoveWithDummyHeuristicAlgorithm";
import { Session } from "../domain/Session";
import { SessionDAO } from "./dao/SessionDAO";

//aka Factory, aka ServiceLocator
export class ConfigurableDependencies {
  private static _instance: ConfigurableDependencies;

  private sessionRepository!: ISessionRepository;
  private aiMoveAlgorithm!: IMoveAlgorithm;
  constructor() {
  }
  static getInstance(): ConfigurableDependencies {
    if (!this._instance) {
      this._instance = new ConfigurableDependencies();
    }
    return this._instance;
  }

  getSessionRepository(session: Session): ISessionRepository {
    if (!this.sessionRepository) {
      this.sessionRepository = new SessionDAO(session);
    }
    return this.sessionRepository;
  }
  getAIMoveAlgorithm(): IMoveAlgorithm {
    if (!this.aiMoveAlgorithm) {
      this.aiMoveAlgorithm = new RandomMoveWithDummyHeuristicAlgorithm(100);
    }
    return this.aiMoveAlgorithm;
  }

}