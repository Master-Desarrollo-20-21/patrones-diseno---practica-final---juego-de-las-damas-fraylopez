
export interface ISessionRepository {
  save(name?: string): void;
  load(name: string): void;
  isValidGameName(name: string): boolean;
  getSavedGamesNames(): string[];
}