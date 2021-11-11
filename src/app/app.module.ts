import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NewStockComponent } from './new-stock/new-stock.component';
import { CardTemplateComponent } from './card-template/card-template.component';



@NgModule({
  declarations: [
    AppComponent,
    NewStockComponent,
    CardTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
