import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-ver',
  templateUrl: './modal-ver.component.html',
  styleUrls: ['./modal-ver.component.scss'],
})
export class ModalVerComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalVerComponent>,
    @Inject(MAT_DIALOG_DATA) public message: any
  ) {}

  ngOnInit(): void {
    console.log(this.message);
  }

  closeModal() {
    this.dialog.closeAll();
  }
}
