import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {ChatComponent} from './chat.component';
import {ChatRoutingModule} from './chat.routing.module';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    MatCardModule
  ]
})
export class ChatModule {}
