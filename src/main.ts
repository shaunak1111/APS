import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { bootstrapWorkerUi } from '@angular/platform-webworker';

// if (environment.production) {
//   enableProdMode();
// }

if (ENV === 'production') {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule);
if (ENV === 'test') {
  platformBrowserDynamic().bootstrapModule(AppModule);
} else {
  bootstrapWorkerUi('webworker.bundle.js');
}
