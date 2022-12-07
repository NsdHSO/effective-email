import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {RouterOutlet} from '@angular/router';
import {TrafficLightComponent} from '../traffic-light/traffic-light.component';
import {InboxComponent} from './inbox.component';
import {InboxRoutingModule} from './inbox.routing.module';

@NgModule({
  declarations: [
    InboxComponent,
    TrafficLightComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatIconModule,
    RouterOutlet,
    InboxRoutingModule,
    MatTooltipModule
  ]
})
export class InboxModule {}
