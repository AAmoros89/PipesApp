import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//Configuracion del local de la app
import localeEs from '@angular/common/locales/es'
import localeFRCA from '@angular/common/locales/fr-CA'

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);
registerLocaleData(localeFRCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es' //Establece el Español como idioma de forma global
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
