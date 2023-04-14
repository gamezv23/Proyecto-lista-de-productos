import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/lista.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalVerComponent } from '../modal-ver/modal-ver.component';
import { ModalEditarComponent } from '../modal-editar/modal-editar.component';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  info: any = [];
  dialogRef: any;

  constructor(private servilista: ListaService, public dialog: MatDialog) {}

  displayedColumns: string[] = ['id', 'name', 'code', 'description', 'boton'];

  dataSource: any = new MatTableDataSource<any>([]);

  ngOnInit(): void {
    this.fulldata();
  }



  openDialog(element: any): void {
    this.dialog.open(ModalVerComponent, {
      width: '500px',
      height: '250px',
      data: element,
    });
  }

  editproduct(element: any): void {
    const dialogRef = this.dialog.open(ModalEditarComponent, {
      width: '800px',
      height: '700px',
      data: element,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.fulldata();
    });
  }

  removeproduct(element: any): void {
    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      width: '800px',
      height: '300px',
      data: element,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.fulldata();
    });
  }

  fulldata() {
    this.servilista.get_llamarListado().subscribe((data: any) => {
      console.log(data);
      this.info = [];
      data.data.forEach((element: any) => {
        this.info.push({
          id: element.id,
          name: element.name,
          code: element.code,
          description: element.description,
        });
      });

      this.dataSource.data = this.info;
    });
  }
}

// abrirModal(): void {
//   const dialogRef = this.dialog.open(MiModalComponent, {
//     width: '400px', // Configura las opciones del modal según tus necesidades
//   });

//   // Escucha el evento afterClosed
//   dialogRef.afterClosed().subscribe(result => {
//     console.log('Modal cerrado', result); // Realiza acciones adicionales cuando el modal se cierra
//   });
