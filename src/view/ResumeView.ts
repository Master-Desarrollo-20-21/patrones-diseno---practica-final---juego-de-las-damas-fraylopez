import { ResumeController } from "../controllers/ResumeController";
import { ConsoleView } from "./models/ConsoleView";

export class ResumeView extends ConsoleView {
  interact(controller: ResumeController) {
    const newGameResponse = this.console.readString("Restart? (y/n): ");
    controller.resume(newGameResponse.toLowerCase() === "y");
  }
}
