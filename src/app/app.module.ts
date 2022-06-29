import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplaynameComponent } from './displayname/displayname.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent, DisplaynameComponent],
  imports: [BrowserModule],
  providers: [],
  // INFO: boostrapp is not needed
  // bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    customElements.define(
      'wc-displayname',
      createCustomElement(DisplaynameComponent, {
        injector,
      })
    );
  }
  ngDoBootstrap() {}
}
