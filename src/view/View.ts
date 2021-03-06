import { PlayView } from "./PlayView";
import { ResumeView } from "./ResumeView";
import { StartView } from "./StartView";

export class View {

  private readonly startView: StartView;
  private readonly playView: PlayView;
  private readonly resumeView: ResumeView;

  constructor() {
    this.startView = new StartView();
    this.playView = new ResumeView();
    this.resumeView = new ResumeView();
  }
}
