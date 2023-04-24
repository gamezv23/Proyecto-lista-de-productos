import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ListaService } from 'src/app/lista.service';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.scss'],
})
export class ModalEliminarComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private servilista: ListaService,
    public dialogRef: MatDialogRef<ModalEliminarComponent>,
    @Inject(MAT_DIALOG_DATA) public message: any
  ) {}

  ngOnInit(): void {}
  closeModal() {
    this.dialog.closeAll();
  }

  eliminar() {
    console.log(this.message);

    this.servilista.deleteProducto(this.message.id).subscribe((lista) => {
      console.log(lista);
      this.closeModal();
    });
  }
}
