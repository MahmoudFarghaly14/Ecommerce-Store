import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"",redirectTo:"products",pathMatch:"full"},
  {path:"products",component:ProductsComponent},
  {path:"card",component:CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
