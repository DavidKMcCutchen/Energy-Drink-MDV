import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from "@angular/router";
import { ProductComponent } from './product/product.component';
import { ProductService } from "@energy-drink/core-data";
import { LoginComponent } from "@energy-drink/ui-login";


const routes: Route[] = [
  {path:'', component: LoginComponent},
  {path: 'products', component: ProductComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'}

];


@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
})
export class RoutingModule {}