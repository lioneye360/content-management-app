import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MsmContentComponent } from './msmContent.component';
import { MsmBreadcrumbsComponent } from './msmBreadcrumbs.component';
import { MsmMenuComponent } from './msmMenu.component';
import { MsmService } from './msmService.service';
import { MsmContentEditorComponent } from './msmContentEditor.component';

@Component({
    selector: 'my-stuff-manager',
    template: `
        <header class="msmHeader">
            <msm-breadcrumbs></msm-breadcrumbs>
        </header>
        <div class="msmMenu">
            <msm-menu></msm-menu>
        </div>
        <div class="msmContent">
            <router-outlet></router-outlet>
        </div>
  `,
  directives: [ROUTER_DIRECTIVES, MsmContentComponent,MsmContentEditorComponent, MsmBreadcrumbsComponent, MsmMenuComponent],
  providers: [ MsmService ]
})

export class MyStuffManagerComponent {
  title = 'Content Management App';
}
