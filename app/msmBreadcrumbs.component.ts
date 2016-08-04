import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, UrlPathWithParams} from '@angular/router';

@Component({
  selector: 'msm-breadcrumbs',
  template: '<ol class="breadcrumb" style="background: #0273D4; color: white;"><li *ngFor="let para of params"><a href="{{para.path}}">{{para.path}}</a></li></ol>'
})

export class MsmBreadcrumbsComponent implements OnInit, OnDestroy {
  params: UrlPathWithParams[];

  constructor(
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.params = this.route.snapshot.url;
  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }
}
