import {NgModule} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {EmailComponent} from './email.component';

const routes : Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  }
  ,
  {
    path: '',
    component: EmailComponent,
    children: [
      {
        path: 'inbox',
        loadChildren: () => import('./component/inbox/inbox.module').then(
          m => m.InboxModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class EmailRoutingModule {}
