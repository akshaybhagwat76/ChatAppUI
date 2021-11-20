import { BrowserModule, Title } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './_modules/shared.module';
import { SampleModule } from './_modules/sample.module';
import { SampleLayoutComponent } from './_layouts/sample-layout.component';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';

registerLocaleData(localeTr);

@NgModule({
  declarations: [
    AppComponent,
    SampleLayoutComponent,
  ],

  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    SampleModule
  ],


  providers: [
    Title,
    { provide: LOCALE_ID, useValue: "tr-TR" },
    {
      provide: HIGHLIGHT_OPTIONS, // https://www.npmjs.com/package/ngx-highlightjs
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        }
      }
    },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
