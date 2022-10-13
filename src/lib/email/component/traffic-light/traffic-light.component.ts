import {Component, Input} from "@angular/core";
import {TrafficState} from "../../utils";

@Component({
             selector   : "lib-traffic-light",
             templateUrl: "./traffic-light.component.html",
             styleUrls  : ["./traffic-light.component.scss"],
           })
export class TrafficLightComponent {
  @Input()
  stateOfTraffic : TrafficState = 2;
  public label = "";

  public setClass() : string {
    if(this.stateOfTraffic === 0) {
      this.label = "Primary";
      return "primary";
    }
    if(this.stateOfTraffic === 1) {
      this.label = "Work";
      return "work";
    }
    if(this.stateOfTraffic === 2) {
      this.label = "Friends";
      return "friends";
    }
    this.label = "Social";
    return "social";
  }
}
