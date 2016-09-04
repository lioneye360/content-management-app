import { MsmService } from './msmService.service';
import { addProviders, inject, async } from '@angular/core/testing';
import { DATABASE } from './mock-data';

describe('Msm Service Tests', () => {
  let msmService:MsmService = new MsmService();
  let database = DATABASE;

  beforeEach(() => {
    addProviders([
      MsmService
    ]),

      inject([MsmService], (m:MsmService) => {
        msmService = m;
      });

  });

  it('returns a list of data', async(() => {
    msmService.getDatabase()
      .then(database => {
        expect(database.length).toBeDefined();
        expect(database.length).toBe(3);
        expect(database[1].category).toEqual('category2');
        expect(database[2].items.length).toBe(2);
      })
  }));

  it('returns a single data by content', done => {
    let category:string = 'category1';
    let content:string = 'content1';

    msmService.getData(category, content)
      .then(data => {
        expect(data).toBeDefined();
        expect(data.content).toEqual('content1');
        expect(data.title).toEqual('title1');
        done();
      })
      .catch(error => done.fail('Error'));
  });

  it('add new item', done => {
    let category:string = 'category3';
    let content:string = 'newContent';

    msmService.addData(category, content)
      .then(() => {
        expect(database[2].items.length).toBe(4);
        expect(database[2].category).toBe('category3');
        expect(database[2].items[2].content).toBe('newContent');
        expect(database[2].items[2].description).toBe('New Description');
        done();
      })
      .catch(error => done.fail('Error'));
    ;

    content = 'superDuperContent';

    msmService.addData(category, content)
      .then(() => {
        expect(database[2].items.length).toBe(3);
        expect(database[2].category).toBe('category3');
        expect(database[2].items[3].content).toBe('superDuperContent');
        expect(database[2].items[3].picture).toBe('default.jpg');
        done();
      })
      .catch(error => done.fail('Error'));
  });
});
