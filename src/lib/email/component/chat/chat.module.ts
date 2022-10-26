import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ChatComponent} from './chat.component';
import {ChatRoutingModule} from './chat.routing.module';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule {}
