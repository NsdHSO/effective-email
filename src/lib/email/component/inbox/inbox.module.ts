import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {RouterOutlet} from "@angular/router";
import {TrafficLightComponent} from "../traffic-light/traffic-light.component";
import {ChatComponent} from "./chat/chat.component";
import {InboxComponent} from "./inbox.component";

@NgModule({
  declarations: [InboxComponent, ChatComponent, TrafficLightComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatIconModule,
    RouterOutlet,
  ],
})
export class InboxModule {}
