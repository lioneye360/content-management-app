import { Component, OnInit } from '@angular/core';
import { Data }              from './data';
import { MsmService }       from './msmService.service';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'msm-menu',
  templateUrl: 'app/msmMenu.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class MsmMenuComponent implements OnInit {
  database: Data[];
  params: string[];

  constructor (private msmService: MsmService,
               private t: Router) {}

  getUrl() {
    return this.t.routerState.snapshot.url.split('/');
  }

  getDatabase(): void {
    this.msmService.getDatabase().then(database => this.database = database);
  }

  ngOnInit() {
    this.getDatabase();
  }
}
