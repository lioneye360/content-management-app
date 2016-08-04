import { provideRouter, RouterConfig }  from '@angular/router';

import { MsmBreadcrumbsComponent } from './msmBreadcrumbs.component';
import { MsmMenuComponent } from './msmMenu.component';
import { MsmContentComponent } from './msmContent.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/category1/hello',
    pathMatch: 'full'
  },
  {
    path: 'category2/:content',
    component: MsmMenuComponent
  },
  {
    path: 'category1/hello',
    component: MsmBreadcrumbsComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
