import {NgModule} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {EmailComponent} from './email.component';
import {EmailResolver} from './utils';

const routes : Routes = [
  {
    path: 'email',
    component: EmailComponent,
    children: [
      {
        path: 'inbox',
        loadChildren: () => import('./component/inbox/inbox.module').then(m => m.InboxModule),
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
