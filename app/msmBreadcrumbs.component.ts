import { Component , OnInit } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'msm-breadcrumbs',
  templateUrl: 'app/msmBreadcrumbs.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class MsmBreadcrumbsComponent {
  breadcrumbs: string[] = ['Home', 'Category', 'Content', 'Edit'];


  constructor(private router:Router) {
  }

  getUrl() {
    let url:string[] = [''];
    let single:string = '';

    this.router.routerState.snapshot.url.split('/').forEach(route => {
      if (route !== '') {single = single + '/' + route;
      url.push(single)}
    });
      return url;
  }
}
