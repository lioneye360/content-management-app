import { DATABASE } from './mock-data';
import { Injectable } from '@angular/core';

@Injectable()
export class MsmService {
  getDATABASE() {
    return Promise.resolve(DATABASE);
  }

  getData(category: string, content : string) {
    return this.getDATABASE()
      .then(DATABASE => DATABASE.find(data => data.category === category && data.content === content));
  }
}
