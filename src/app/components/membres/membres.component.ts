import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddMembreComponent } from '../add-membre/add-membre.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-membres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './membres.component.html',
  styleUrl: './membres.component.scss'
})
export class MembresComponent {
  names: string[] = ["Idris","Imran"];

  constructor(private dialog: MatDialog) {}

  addName() {
    const dialogRef = this.dialog.open(AddMembreComponent);

    dialogRef.afterClosed().subscribe((result: { prenom: any; nom: any; }) => {

      console.log(result.prenom)
      if (result) {
        // Process the result if needed
        this.names.push(`${result.prenom}`);
      }
    });
  }

}
