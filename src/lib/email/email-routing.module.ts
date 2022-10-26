import {NgModule} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {EmailComponent} from './email.component';
import {EmailResolver} from './utils';

const routes : Routes = [
  {
    path: '',
    component: EmailComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./component/inbox/inbox.module').then(m => m.InboxModule),
        resolve: {
          data: EmailResolver
        }
      },
      {
        path: 'chat',
        loadChildren: () => import('./component/chat/chat.module').then(m => m.ChatModule)
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class EmailRoutingModule {}
