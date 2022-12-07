import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';
import {ChatModule} from './component/chat/chat.module';
import {InboxModule} from './component/inbox/inbox.module';
import {EmailRoutingModule} from './email-routing.module';
import {EmailComponent} from './email.component';

@NgModule({
  declarations: [EmailComponent],
  imports: [
    CommonModule,
    ChatModule,
    EmailRoutingModule,
    FormsModule,
    InboxModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ]
})
export class EmailModule {}
