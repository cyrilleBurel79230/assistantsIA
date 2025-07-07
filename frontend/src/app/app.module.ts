import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { appRoutes }       from './app.routes';
import { RouterModule }   from '@angular/router';

@NgModule({
  // pas de declarations grace au standalone
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[]
})
export class AppModule { }
