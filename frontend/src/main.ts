// src/main.ts
import { bootstrapApplication }        from '@angular/platform-browser';
import { provideHttpClient }           from '@angular/common/http';
import { provideRouter }               from '@angular/router';

import { AppComponent }                from './app/app.component';
import { appRoutes }                   from './app/app.routes';
import { APP_CONFIG, APP_CONFIG_VALUE } from './app/app.config';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(appRoutes),
    // -> Ici on fournit notre config au token
    { provide: APP_CONFIG, useValue: APP_CONFIG_VALUE }
  ]
})
.catch(err => console.error(err));

