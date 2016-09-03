import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Data } from './data';
import { Item } from './item';
import { MsmService } from './msmService.service';

@Component({
  selector: 'msm-content-editor',
  templateUrl: 'app/msmContentEditor.component.html'
})

export class MsmContentEditorComponent implements OnInit {
  database: Data[];
  selectedItem: Item;
  copyItem: Item;
  sub: any;
  category: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private msmService: MsmService) { }


  getDatabase(): void {
    this.msmService.getDatabase().then(database => this.database = database);
  }

  getData(category: string, content: string) {
    this.msmService.getData(category,content)
      .then(item => {this.selectedItem = item;
        this.copyItem = Object.assign({}, this.selectedItem);});
  }

  goContent(): void {
  this.router.navigate([this.category,this.selectedItem.content]);
}

  goBack(): void {
    window.history.back();
  }

  editItem () {
    this.selectedItem.title = this.copyItem.title;
    this.selectedItem.description = this.copyItem.description;
    this.selectedItem.picture = this.copyItem.picture;
    this.goBack();
  }

  private getIndex(category: string): number {
    let index:number;

    for (index = 0; index < this.database.length; index++) {
      if (this.database[index].category === category)
        return index;
    }
    return -1;
  }


  ngOnInit() {
    this.getDatabase();

    this.sub = this.route.params.subscribe(params => {
      let category = params['category'];
      let content = params['content'];
      this.category = category;

      if(content !== undefined){
        this.getData(category,content);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
