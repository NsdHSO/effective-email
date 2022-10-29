import {NgModule} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {EmailResolver} from '../../utils';
import {InboxComponent} from './inbox.component';

const routes : Routes = [
  {
    path: '',
    component: InboxComponent,
    resolve: {
      data: EmailResolver
    },
  },
  {
    path: ':id',
    loadChildren: () => import('./../chat/chat.module').then(m => m.ChatModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class InboxRoutingModule {}
