import { Injectable }     from '@angular/core';
import { Response } from '@angular/http';
import { Data } from './data';
import { Item } from "./item";
import { DATABASE } from './mock-data';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class MsmService {
  constructor () {}

  getDatabase(): Promise<Data[]> {
    return Promise.resolve(DATABASE);
  }

  getData(category: string, content: string): Promise<Item> {
    return this.getDatabase()
      .then(database => database=this.isCategoryExist(category,database,content));
  }

  private getCategory(category: string, database:any, content: string): any {
    let data:any;
    let index:number;

    for (index = 0; index < database.length; index++) {
      if (database[index].category === category) {
        data = database[index];
        return category;
      }
    }
    return undefined;
  }

  getCategory1(category: string): Promise<string> {
    return this.getDatabase().then(database => database.find((data:Data) => data.category === category).category);
  }

  categoryExist(category: string): Promise<boolean> {
    return this.getCategory1(category).then(c => c !== undefined);
  }

  private isCategoryExist(category: string, database:any, content: string): any{
    let data:any;
    let index:number;

    for(index=0; index<database.length; index++){
      if(database[index].category === category){data = database[index]; break;}}

    if(data===undefined)
      return data;

    for(index=0; index<data.items.length; index++){
      if(data.items[index].content === content) {
        return data.items[index];
      }
    }
    return undefined;
  }

  addData (category: string, content: string) {
    let item: Item = {content: content, title: 'newTitle', description: 'New Description', picture: 'default.jpg'};
    return this.getDatabase()
      .then((database:Data[]) => database.find((i:Data) => i.category === category).items.push(item));
  }

  editData (category: string, item: Item) {
    return this.getDatabase()
      .then((database:Data[]) => database.find((data:Data) => data.category === category)
        .items.find((i:Item) => i.content === item.content));
  }

  deleteData(category: string, content: string) {
    return this.getDatabase()
      .then((database:Data[]) => database.find((data:Data) => data.category === category)
        .items.filter(item => item.content !== content));
  }


  private extractData (res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }

}
