import './polyfills.ts';
import '@angular/core';
import '@angular/common';

import { platformWorkerAppDynamic } from '@angular/platform-webworker-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';

if (ENV === 'production') {
  enableProdMode();
}

platformWorkerAppDynamic().bootstrapModule(AppModule);
