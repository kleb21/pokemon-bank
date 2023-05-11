import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { DepositPageComponent } from './deposit-page/deposit-page.component';
import { DrawOnPageComponent } from './draw-on-page/draw-on-page.component';
import { ServicePayPageComponent } from './service-pay-page/service-pay-page.component';
import { RecordPageComponent } from './record-page/record-page.component';
import { Chart } from 'chart.js';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    DepositPageComponent,
    DrawOnPageComponent,
    ServicePayPageComponent,
    RecordPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: ''}
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
