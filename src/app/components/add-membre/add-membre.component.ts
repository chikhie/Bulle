// add-membre.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-membre',
  styleUrls: ['./add-membre.component.scss'],
  templateUrl: './add-membre.component.html',
})
export class AddMembreComponent {
  nom: any;
  prenom: any;
  telephone: any;

  constructor(
    public dialogRef: MatDialogRef<AddMembreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSubmit(): void {
    const newMember = {
      nom: this.nom,
      prenom: this.prenom,
      telephone: this.telephone,
    };

    this.dialogRef.close(newMember);
  }
}
