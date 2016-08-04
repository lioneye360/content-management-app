import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute, UrlPathWithParams} from '@angular/router';
import { MsmContentComponent } from './msmContent.component';
import { MsmBreadcrumbsComponent } from './msmBreadcrumbs.component';
import { MsmService } from './msmService.service';

@Component({
    selector: 'my-stuff-manager',
    template: `

    <header class="msmHeader">
      <msm-breadcrumbs></msm-breadcrumbs>
          <router-outlet></router-outlet> 
    </header>
    <div class="msmMenu"><msm-content></msm-content></div>
    <div class="msmContent"></div>
 
  `,
  directives: [ROUTER_DIRECTIVES, MsmContentComponent, MsmBreadcrumbsComponent],
  providers: [
    MsmService
  ]
})

export class MyStuffManagerComponent implements OnInit {

  params: UrlPathWithParams[];

  constructor(
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.params = this.route.snapshot.url;
  }

  title = 'Tour of Heroes!!!!';
}
