import { provideRouter, RouterConfig }  from '@angular/router';

import { MsmContentComponent } from './msmContent.component';
import { MsmContentEditorComponent } from './msmContentEditor.component';

const routes: RouterConfig = [
  {
    path: ':category/:content/edit',
    component: MsmContentEditorComponent,
    pathMatch: 'full',
    data: {breadcrumb: 'Edit'}
  },
  {
    path: ':category/:content/:not',
    redirectTo: '/',
    pathMatch: 'prefix'
  },
  {
    path: ':category/:content',
    component: MsmContentComponent,
    pathMatch: 'full',
    data: {breadcrumb: 'Content'}
  },
  {
    path: ':category',
    component: MsmContentComponent
  },
  {
    path: '',
    component: MsmContentComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }

];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];



