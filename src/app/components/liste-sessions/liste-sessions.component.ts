import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Firestore,  doc } from '@angular/fire/firestore';
import { Timestamp, getDoc, } from 'firebase/firestore';
import { Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HeaderComponent } from '../header/header.component';

 
@Component({
  selector: 'app-liste-sessions',
  standalone: true,
  imports: [CommonModule,FormsModule,NavBarComponent,HeaderComponent],
  templateUrl: './liste-sessions.component.html',
  styleUrl: './liste-sessions.component.scss'
})

export class ListeSessionsComponent implements OnInit{
  firestore:Firestore = inject(Firestore);
  liste:any[] = [];
  header:string = "Liste des sessions"


  constructor(private router: Router) { }
  async ngOnInit(): Promise<void> {
    const datesRef = doc(this.firestore, "/ListeSessions/SuMgtaInDPFC6vxCSNye");
    this.liste = (await getDoc(datesRef)).get('date'); 
    this.liste.sort((a, b) => {
      if (a > b) {
        return -1; // Tri décroissant
      } else if (a < b) {
        return 1; // Tri croissant
      } else {
        return 0; // Éléments égaux
      }
    });

   }

   onClickNavigateWithData(date:Date): void {
    // Utilisez le service Router pour naviguer vers le composant suivant en passant les données
    this.router.navigate(['session',{ data:date }]);
  }
  

}
