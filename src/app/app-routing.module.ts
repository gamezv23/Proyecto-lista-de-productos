import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './componentes/create-product/create-product.component';
import { ListaComponent } from './componentes/lista/lista.component';

const routes: Routes = [
{path:'lista',component:ListaComponent},
{path:'agregar-producto',component:CreateProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
