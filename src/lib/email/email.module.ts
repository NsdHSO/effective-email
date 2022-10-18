import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {RouterOutlet} from "@angular/router";
import {InboxComponent, TrafficLightComponent} from "./component";
import {EmailRoutingModule} from "./email-routing.module";
import {EmailComponent} from "./email.component";

@NgModule({
            declarations: [EmailComponent, InboxComponent, TrafficLightComponent],
    imports: [
        CommonModule,
        EmailRoutingModule,
        MatButtonModule,
        MatIconModule,
        RouterOutlet,
        MatCheckboxModule,
        FormsModule,
    ],
          })
export class EmailModule {}
