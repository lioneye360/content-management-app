import { bootstrap }    from '@angular/platform-browser-dynamic';
import { MyStuffManagerComponent } from './myStuffManager.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(MyStuffManagerComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS
  ]);
