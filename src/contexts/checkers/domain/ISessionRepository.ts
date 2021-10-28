
export interface ISessionRepository {
  save(name?: string): void;
  load(name: string): void;
  isValidGameName(name: string): boolean;
  getSavedGamesNames(): string[];
}
export interface IAsyncSessionRepository {
  save(name?: string): Promise<void>;
  load(name: string): Promise<void>;
  isValidGameName(name: string): Promise<boolean>;
  getSavedGamesNames(): Promise<string[]>;
}