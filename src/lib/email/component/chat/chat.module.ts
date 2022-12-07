import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {ChatComponent} from './chat.component';
import {ChatRoutingModule} from './chat.routing.module';
import {OnScrollDirective} from './directive/on-scroll.directive';
import {InputChatComponent} from './input-chat/input-chat.component';

@NgModule({
  declarations: [ChatComponent, InputChatComponent, OnScrollDirective],
  imports: [
    CommonModule,
    ChatRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ]
})
export class ChatModule {}
