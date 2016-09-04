import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Data } from './data';
import { Item } from './item';
import { MsmService } from './msmService.service';

@Component({
  selector: 'msm-content',
  templateUrl: 'app/msmContent.component.html'
})

export class MsmContentComponent implements OnInit {
  database: Data[];
  selectedItem: Item;
  category: string;
  content: string;
  sub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private msmService: MsmService) { }


  getDatabase(): void {
    this.msmService.getDatabase().then(database => this.database = database);
  }

  getData(category: string, content: string) {
  this.msmService.getData(category,content)
    .then(item => this.selectedItem = item);
  }

  deleteData(category: string, content: string){
    this.msmService.deleteData(category,content)
      .then(items => this.database[this.getIndex(category)].items = items);
    this.goBack();
  }

  private categoryExist(category: string) {
    return this.msmService.categoryExist(category);
  }

  private getIndex(category: string): number {
    let index:number;

    for (index = 0; index < this.database.length; index++) {
      if (this.database[index].category === category)
        return index;
    }
    return -1;
  }

  goBack() {
    this.router.navigate([this.category]);
  }

  goEdit() {
    this.router.navigate([this.route.snapshot.params['category'], this.route.snapshot.params['content'], 'edit']);
  }


  ngOnInit() {
    this.getDatabase();

    this.sub = this.route.params.subscribe(params => {
      this.category = params['category'];
      this.content = params['content'];

      if(this.content !== undefined){
        this.msmService.getData(this.category,this.content)
          .then(item => {this.selectedItem = item;
            if(this.selectedItem === undefined){
              this.msmService.addData(this.category, this.content).then(() => this.getData(this.category,this.content));
            }
          });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
