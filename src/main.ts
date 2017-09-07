import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapWorkerUi } from '@angular/platform-webworker';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

if (ENV === 'production') {
  enableProdMode();
}

// enableProdMode();
if (ENV === 'test') {
	platformBrowserDynamic().bootstrapModule(AppModule);
} else {
	bootstrapWorkerUi('webworker.bundle.js');
}
