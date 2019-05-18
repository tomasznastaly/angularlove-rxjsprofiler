import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { Observable } from 'rxjs';
import { setup, printSubscribers, track } from 'observable-profiler';

  setup(Observable);
platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
    track();
  window['stopProfiler'] = () => {
    const subscribers = track(false);
    ref.destroy();
    printSubscribers({
      prefix: 'NATGAS-ENFLEXCO',
      subscribers,
      reportInnerSubscriptions: false,
    });
  }
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }

  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));
