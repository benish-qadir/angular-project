import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './Core.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,


   

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
   SharedModule,
   CoreModule
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
