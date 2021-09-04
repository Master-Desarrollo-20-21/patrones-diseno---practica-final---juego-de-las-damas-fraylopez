import { ConsoleView } from "./ConsoleView";

export class ResponseDialog extends ConsoleView {
  constructor(private readonly question: string) {
    super();
  }
  askString(): string {
    return this.console.readString(this.question);
  }
  askNumber(): number {
    return this.console.readInt(this.question);
  }
}