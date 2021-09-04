
export abstract class Command {

  constructor(protected readonly title: string) { }

  abstract execute(): void;
  abstract isActive(): boolean;

  getTitle(): string {
    return this.title;
  }
}
