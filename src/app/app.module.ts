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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
      {path: '', redirectTo:'login', pathMatch: 'full'},
      {path: 'login', component:LoginComponent},
      {path: 'main' , component: MainComponent},
      {path: 'deposit', component:DepositPageComponent},
      {path: 'draw-on', component:DrawOnPageComponent},
      {path: 'record-page', component:RecordPageComponent},
      {path: 'service-pay', component: ServicePayPageComponent}
    ]),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
