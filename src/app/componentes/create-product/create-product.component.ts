import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListaService } from 'src/app/lista.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  name: any;
  code: any;
  description: any;
  producto: any = {};

  constructor(private router: Router, private servilista: ListaService) {}

  ngOnInit(): void {}

  save() {
    if (this.name != '' && this.code != '') {
      this.producto = {
        name: this.name,
        code: this.code,
        description: this.description,
      };

      console.log(this.producto);

      this.servilista.addProducto(this.producto).subscribe((list: any) => {
        this.router.navigate(['/lista']);
        console.log(list);
      });
    }

    console.log(this.code);
  }
}

// cuando se utiliza otra pagina se tiene que utilizar Router.navegate y el nombre de la pgina a la q se quiere regresar
// cuando se utiliza modal es diferente
