import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { ListaComponent } from './componentes/lista/lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { CreateProductComponent } from './componentes/create-product/create-product.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalVerComponent } from './componentes/modal-ver/modal-ver.component';
import { ModalEditarComponent } from './componentes/modal-editar/modal-editar.component';
import { ModalEliminarComponent } from './componentes/modal-eliminar/modal-eliminar.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CreateProductComponent,
    ModalVerComponent,
    ModalEditarComponent,
    ModalEliminarComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
