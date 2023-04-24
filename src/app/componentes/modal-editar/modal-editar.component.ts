import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ListaService } from 'src/app/lista.service';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.scss'],
})
export class ModalEditarComponent implements OnInit {
  art = {
    name: this.message.name,
    code: this.message.code,
    description: this.message.description,
  };
  producto: any = {};

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public message: any,
    private servilista: ListaService
  ) {}

  ngOnInit(): void {
    console.log(this.message);
  }

  closeModal() {
    this.dialog.closeAll();
  }

  modificar() {
    this.producto = {
      name: this.art.name,
      code: this.art.code,
      description: this.art.description,
    };
    console.log(this.producto);

    this.servilista
      .editproduct(this.message.id, this.producto)
      .subscribe((list: any) => {
        console.log(list);
        this.closeModal();
      });
  }
}
