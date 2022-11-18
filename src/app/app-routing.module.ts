import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/Product.component';


const routes: Routes = [

  {path : 'product' , component : ProductComponent},
  {path : 'cart' , component : CartComponent},
  {path : 'contact' , component : ContactComponent}, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
