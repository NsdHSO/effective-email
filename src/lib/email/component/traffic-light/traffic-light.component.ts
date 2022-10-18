import {Component, Input} from "@angular/core";

@Component({
  selector: "lib-traffic-light",
  templateUrl: "./traffic-light.component.html",
  styleUrls: ["./traffic-light.component.scss"],
})
export class TrafficLightComponent {
  @Input()
  stateOfTraffic : any = 2;
  public label         = "";

  public setClass() : string {
    debugger
    if(this.stateOfTraffic.label === 0) {
      debugger
      this.label = "Primary";
      return "primary";
    }
    if(this.stateOfTraffic.label === 1) {
      this.label = "Work";
      return "work";
    }
    if(this.stateOfTraffic.label === 2) {
      this.label = "Friends";
      return "friends";
    }
    this.label = "Social";
    return "social";
  }
}
