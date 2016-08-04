import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { Router } from '@angular/router';
import { Data } from './data';
import { MsmService } from './msmService.service';

@Pipe({
  name: "orderBys"
})

@Component({
  selector: 'msm-content',
  template: `
  <h2>  Menu</h2>
  <ul class="cont">
  <li *ngFor="let data of database"
    [class.selected]="data === selectedData"
  (click)="onSelect(data)">
  <span class="badge">{{data.category}}</span> <p>{{data.content}}</p>
</li>
</ul>
`
})

export class MsmContentComponent implements OnInit {
  database: Data[];
  selectedData: Data;

  constructor(
    private router: Router,
    private msmService: MsmService) { }

  getDATABASE() {
    this.msmService.getDATABASE().then(database => this.database = database);
  }

  ngOnInit() {
    this.getDATABASE();
  }

  onSelect(data: Data) { this.selectedData = data; }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedData.description]);
  }
}

export class OrderByPipes implements PipeTransform {
  transform(array: Data[], args: string): Data[] {
    if (array == null) {
      return null;
    }
    array.sort((a: any, b: any) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
