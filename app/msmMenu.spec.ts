import { MsmMenuComponent } from './msmMenu.component';
import { async, inject, addProviders } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';

describe('MsmMenuComponent with TCB', function () {

  it('should instantiate component',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

    tcb.createAsync(MsmMenuComponent).then(fixture => {
      expect(fixture.componentInstance instanceof MsmMenuComponent).toBe(true, 'should create MsmMenuComponent');
    });
  })));
});