import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardTemplateComponent } from './card-template/card-template.component';
import { NewStockComponent } from './new-stock/new-stock.component';

const routes: Routes = [
  { path: "", component: CardTemplateComponent },
  { path: "new-stock", component: NewStockComponent }
];
;;

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
