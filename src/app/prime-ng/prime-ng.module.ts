import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
//import { MenuModule } from 'primeng/menu';

@NgModule({

    exports: [
      //MenuModule,
      ButtonModule,
      CardModule,
      FieldsetModule,
      MenubarModule,
      PanelModule,
    ]

})
export class PrimeNGModule { }
