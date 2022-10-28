import {NgModule} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {ChatComponent} from './chat.component';
import {ChatResolver} from './services/resolver/chat.resolver';

const routes : Routes = [
  {
    path: ':id',
    component: ChatComponent,
    resolve: {data: ChatResolver}
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ChatRoutingModule {}
