import { bootstrap }    from '@angular/platform-browser-dynamic';

import { MyStuffManagerComponent } from './myStuffManager.component';
import { appRouterProviders } from './app.routes';

bootstrap(MyStuffManagerComponent, [
  appRouterProviders
  ]);
